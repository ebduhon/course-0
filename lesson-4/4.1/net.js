process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();

server.on('connection', socket => {
    console.log('Client connected.');
    socket.write('Welcome new client!\n');
    
    socket.on('data', data => {
        console.log('data is:', data);
        socket.write('data is: ');
        socket.write(data);
    });
    
    socket.setEncoding('utf8');
    
    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

server.listen(8000, () => {
    console.log('Server bound.');
});