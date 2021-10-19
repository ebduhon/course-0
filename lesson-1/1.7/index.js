
/** require('some-module');
 * 1. try to load some-module.js
 * 2. try to load some-module.json
 * 3. try to load some-module.node
 **/

// const data = require('data');
// console.log(data);

// const config = require('./config.json');

const addon = require('addon');

console.log(addon.hello());