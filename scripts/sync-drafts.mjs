#!/usr/bin/env node
/**
 * Đưa draft vừa viết vào review queue.
 *
 * Pipeline daily sinh queue → agent viết record vào src/content/repos → đến
 * đây thì file mới chỉ nằm trên máy. Script này commit + push chúng, và với
 * --deploy thì build/deploy luôn để chúng hiện ở /review trên production.
 *
 * Chỉ đụng vào src/content/repos: mọi thay đổi khác trong working tree được
 * giữ nguyên, không bị cuốn vào commit.
 */
import { spawn } from 'node:child_process';

const argv = process.argv.slice(2);
const wantsPush = !argv.includes('--no-push');
const wantsDeploy = argv.includes('--deploy');

const REPOS_PATH = 'src/content/repos';

// shell: true nối chuỗi không escape, nên chỉ dùng cho npm.cmd trên Windows —
// commit message nhiều dòng phải đi thẳng vào git dưới dạng một argv.
function run(command, args, { capture = false, shell = false } = {}) {
  return new Promise((resolve, reject) => {
    let out = '';
    const child = spawn(command, args, {
      stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
      shell,
    });
    if (capture) {
      child.stdout.on('data', (chunk) => {
        out += chunk;
      });
    }
    child.on('error', reject);
    child.on('exit', (code) =>
      code === 0 ? resolve(out) : reject(new Error(`${command} ${args.join(' ')} exited ${code}`)),
    );
  });
}

const status = await run('git', ['status', '--porcelain', '--', REPOS_PATH], { capture: true });
const changed = status
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => {
    const [state, ...rest] = line.split(/\s+/);
    return { state, file: rest.join(' ') };
  });

if (changed.length === 0) {
  console.log('[sync-drafts] Không có record nào thay đổi. Bỏ qua.');
  process.exit(0);
}

const added = changed.filter((c) => c.state === '??').length;
const modified = changed.length - added;
const slugs = changed.map((c) => c.file.split('/').pop().replace(/\.md$/, ''));

const summary =
  added && modified
    ? `${added} record mới, ${modified} record cập nhật`
    : added
      ? `${added} record mới`
      : `${modified} record cập nhật`;

const body = [
  `content: ${summary} từ daily pipeline`,
  '',
  'Draft do pipeline daily sinh ra, đưa vào git để review được từ /review.',
  'Tất cả vẫn draft: true nên chưa lên live site.',
  '',
  ...slugs.map((slug) => `- ${slug}`),
  '',
  'Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>',
].join('\n');

console.log(`[sync-drafts] ${summary}`);
await run('git', ['add', '--', REPOS_PATH]);
await run('git', ['commit', '-m', body]);

if (wantsPush) await run('git', ['push']);

if (wantsDeploy) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await run(npm, ['run', 'publish:prod', '--', '--yes', '--source=drafts-sync'], {
    shell: process.platform === 'win32',
  });
  console.log('[sync-drafts] Đã deploy — draft mới đã có ở /review trên production.');
} else {
  console.log('[sync-drafts] Chưa deploy. Chạy lại với --deploy để đẩy lên /review production.');
}
