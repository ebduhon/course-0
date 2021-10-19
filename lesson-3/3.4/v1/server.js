const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        
        process.nextTick(() => {
            this.emit('response', 'Type a command (help to list commands)');
        });
        
        client.on('command', (command, args) => {
            switch(command) {
                case 'help':
                    this[command](args);
                    break;
                case 'add':
                    this[command](args);
                    break;
                case 'ls':
                    this[command](args);
                    break
                case 'delete':
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Unknown command ...');
                    break;
            }
        });
    }
    
    help() {
        this.emit('response', `Available Commands:
        add task
        ls
        delete :id`
        );
    }
    
    add(args) {
        this.emit('response', args.join(' '));
    }
    
    ls() {
        this.emit('response', 'ls ...');
    }
    
    delete() {
        this.emit('response', 'delete ...');
    }
}

module.exports = (client) => new Server(client);