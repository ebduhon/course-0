
/** Process the file and convert the last 3 bytes fo the file according to the conversionMap working with binary data directly. **/

const fs = require('fs');

const conversionMap = {
    '88': '65',
    '89': '66',
    '90': '67'
};

fs.readFile(__filename, (err, buffer) => { // readfile into a buffer
    let tag = buffer.slice(-4, -1); //slice the buffer to get another binary buffer that holds only the last three bytes
    
    for (let i = 0; i < tag.length; i++) { //loop over this small buffer to do the conversion
        tag[i] = conversionMap[tag[i]];
    }
    
    console.log(buffer.toString()); // the sliced buffer and original buffer have both changed because they share the same memory space.
});

// TAG: XYZ
