# Decision Log

## 2026-06-26

- Discovery is an on-demand step, not a local always-on process.
- Recommended discovery cadence is once per day.
- Default scope for daily discovery: `--days 7`, `--limit 20-30`, rotate by vertical to reduce noise.
- GitHub Actions is the chosen trigger so discovery does not depend on the local machine being open.
- The workflow uses `REPO_RADAR_GITHUB_PAT` first, with `GITHUB_TOKEN` as fallback.
- `discover-repos.mjs` and `fetch-signals.mjs` both read `GITHUB_TOKEN`, so no code changes are needed for PAT usage.
- The current workflow only prints discovery results to logs; it does not yet commit or export artifacts.
- Updated: daily discovery now exports a queue artifact instead of only printing logs.
- Updated: draft writing is handled by Codex scheduler (`reporadar-daily-codex-draft`) after discovery, not by OpenAI API calls in GitHub Actions.
- Updated foundation cadence: use `--days 365 --limit 60 --pick 5` for 2-3 weeks to build the initial draft base, then reduce to a narrower radar cadence.
- Production remains gated by `draft: false`; draft preview is available via `npm run dev` or `npm run preview:drafts`.
