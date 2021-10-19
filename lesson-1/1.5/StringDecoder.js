
/** 
 * When converting streams of binary data we should use the "String Decoder" module 
 * because it handles multi-byte characters better, especially incomplete multi-byte characters
 * The string-decoder preserves the incomplete encoded characters internally until complete then returns the result
 * the default toString() operation on the buffer doesn't do this.
 **/

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk != null) {
        const buffer = Buffer.from([chunk]);
        console.log('With .toString():', buffer.toString());
        console.log('With StringDecoder:', decoder.write(buffer));
    }
});