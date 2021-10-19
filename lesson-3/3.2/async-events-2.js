const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFn, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFn(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('data', (data) => {
    console.log(`Length: ${data.length}`);
});

// ˆ¨©ƒ®¥∂
withTime.on('data', (data) => {
    console.log(`Characters: ${data.toString().length}`);
});

withTime.execute(fs.readFile, __filename);