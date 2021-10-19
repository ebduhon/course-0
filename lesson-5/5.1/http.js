const server = require('http').createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World \n');
});

server.timeout = 1000; // server timeout after 1 second
server.listen(8000);