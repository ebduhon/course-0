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

process.once('uncaughtException', (err) => {
    console.log(err);
    // do some cleanup, what does clean up mean?
    process.exit(1); // The node process should always exit upon one uncaughtException.
})

withTime.on('begin', () => {
    console.log('About to execute');
});

withTime.on('end', () => {
    console.log('Done with execute');
});

withTime.execute(fs.readFile, __filename);