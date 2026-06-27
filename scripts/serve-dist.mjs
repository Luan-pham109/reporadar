import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('D:/RepoRadar/dist');
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = path.join(root, url === '/' ? 'index.html' : url);

    fs.stat(filePath, (err, stat) => {
      if (!err && stat.isDirectory()) filePath = path.join(filePath, 'index.html');

      fs.readFile(filePath, (readErr, data) => {
        if (readErr) {
          res.statusCode = 404;
          res.end('Not found');
          return;
        }

        res.setHeader('content-type', mime[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
        res.end(data);
      });
    });
  })
  .listen(4321, '0.0.0.0', () => {
    console.log('preview on http://localhost:4321');
  });
