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

/** simulate async call, however the events still fire synchronously. 
 * It is bad to combine async and sync because things are out of order and hard to reason about. 
 * This function below needs events to be combined with promises and/or callbacks to be async.
 **/
withLog.execute(() => setTimeout(
        () => console.log('**** Executing task ****'),
        500
    )
);
