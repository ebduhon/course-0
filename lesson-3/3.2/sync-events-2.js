const EventEmitter = require('events');

class WithLog extends EventEmitter {
    execute(taskFn) {
        console.log('Before executing');
        this.emit('begin');
        taskFn();
        this.emit('end');
        console.log('After executing');
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));

/**
 * To emit an event after an async operation is done
 * we will need to combine promises or callbacks with event based communication
 **/ 

/**
 * For using events instead of regular callbacks one advantage 
 * is that we can react to the same signal multiple times by defining multiple listeners
 * to accomplish the same with callbacks we have to write more logic inside the callbacks.
 * Events are a great way for applications to allow multiple external plugins to build functionality on top of the application's core
 * you can think of them as hook points to customize the story around state change.
 **/