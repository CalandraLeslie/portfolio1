const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Backend server running' }));
});

const port = process.argv.includes('--port') 
  ? process.argv[process.argv.indexOf('--port') + 1] 
  : 5000;

server.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});