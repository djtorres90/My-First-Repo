const { createServer } = require('node:http');
const { say } = require('cowsay');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
  const { pathname } = new URL(request.url, `http://${hostname}`);

  if (pathname !== '/') {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Page not found.\n');
    return;
  }

  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end(`${say({ text: 'Welcome to my Node.js server!' })}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
