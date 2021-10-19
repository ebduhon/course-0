
/** A "Buffer" is a chunk of memory allocated outside of the v8 heap.
 * We can put some data in this memory 
 * and this data can be interpreted in one of many ways depending on the length of a character for example
 * That is why whenever there is a buffer there is a character encoding.
 * Because whatever we place in the buffer doesn't have a character encoding so to read it we must specify an encoding.
 * Whenever we read content from files or sockets if we don't specify an encoding we get back a buffer object.
 * So a buffer is a lower-level data structure to represent a sequence of binary data.
 * Unlike arrays once a buffer has been allocated it cannot be resized.
 * A buffer can be created in one of three ways.
 * "Buffer.from()"
 * "Buffer.alloc()"
 * "Buffer.allocUnsafe()"
 **/

/** "Buffered data" vs. "Normal data" using the same utf-8 string.
 * When we place the data in the buffer, the buffer does not have a character encoding
 * so it will represent the special character with its internal utf-8 representation 
 * that returns the actual number of bytes used 
 * while the string is counting characters on the default utf-8 encoding.
 **/
const string = 'mock-data œ'; 
const buffer = Buffer.from('mock-data œ'); 

console.log(string, string.length); /** length: 11 **/
console.log(buffer, buffer.length); /** length: 12 **/