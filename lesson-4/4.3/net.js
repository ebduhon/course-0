process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp() {
    const now = new Date();
    return`${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
    socket.id = counter++;
    
    
    console.log('Client connected.');
    socket.write('Welcome new client! Please type your name: \n');
    
    socket.on('data', data => {
        
        /** If the socket has not registered yet, for the first data event. Then, this data is the name of the connected user. **/
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket; //register the new connected socket
            return;
        }
        
        Object.entries(sockets).forEach(([key, clientSocket]) => {
            
            /** If the active socket in the loop is the current socket that is sending the data return so that data is not written in the socket that writes it **/
            if (socket.id == key) {
                return;
            }
            
            clientSocket.write(`${socket.name} ${timestamp()}: `);
            clientSocket.write(data);
        });
    });
    
    // socket.setEncoding('utf8'); // set encoding global
    
    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected.');
    });
});

server.listen(8000, () => {
    console.log('Server bound.');
});