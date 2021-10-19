const server = require('http').createServer();

server.on('request', (req, res) => {
    console.log(req.url);
    
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World \n');
});

server.listen(8000);