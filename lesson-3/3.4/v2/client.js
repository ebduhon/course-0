const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new EventEmitter();

const server = require('./server')(client);

server.on('response', (res) => {
    process.stdout.write('\u001B[2J\u001B[0;0f'); // special command to clear the terminal
    process.stdout.write(res); // write response to terminal
    process.stdout.write('\n\> '); // new line and carrot written to terminal
});

let command;
let args;

rl.on('line', (input) => {
    [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});
