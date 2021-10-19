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
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipher('aes192', 'a_secret'))
    .pipe(progressTransform)
    .pipe(fs.createWriteStream(file + '.encrypted.zz'))
    .on('finish', () => console.log('Done'));