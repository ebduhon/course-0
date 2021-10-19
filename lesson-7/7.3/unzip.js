const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream');
const file = process.argv[2];


const progressTransform = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    
    }
});

fs.createReadStream(file)
    .pipe(crypto.createDecipher('aes192', 'a_secret'))
    .pipe(zlib.createGunzip())
    .pipe(progressTransform)
    .pipe(fs.createWriteStream(file.slice(0, -3)))
    .on('finish', () => console.log('Done'));