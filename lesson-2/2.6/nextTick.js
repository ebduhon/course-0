const fs = require('fs');

function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        return process.nextTick(
            cb,
            new TypeError('argument should be a string')
        );
    }
    
    fs.stat(fileName, (err, stats) => {
        if (err) {
            return cb(err);
        }
        
        cb(null, stats.size);
    });
}

fileSize(__filename, (err, size) => {
    if (err) {
        throw err;
    }
    
    console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!');