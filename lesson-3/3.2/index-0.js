const EventEmitter = require('events'); // import

class Logger extends EventEmitter {} // extend

const logger = new Logger(); // init

/** Emitting a named "event" is the signal that some condition has occurred and indicates a state change in the emitting object **/
logger.emit('event'); // emit

/** We can add "listenerFn" listener functions using the .on method and these functions will be executed anytime the named "event" occurs **/
logger.on('event', listenerFn); // addListener

