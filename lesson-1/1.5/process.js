
/** process is an event emitter **/

process.on('exit', (code) => {
    /** do one final synchronous operation before the node process terminates **/
    /** can only do synchrnous operations only, we can't use the event loop here **/
});

/** The other commonly misused event on the "process" 
 * is the "uncaughtException" event that occurs when an exception is not handled 
 * and it bubbles all the way to the end loop
 **/
process.on('uncaughtException', (err) => {
    /** By default node will print the stacktrace and exit.
     * Unlike the "exit" event if we register an "uncaughtException" handler node will not exit
     * this is bad and unpredicatable in some cases.
     * You should avoid this interrupt and allow the process to exit.
     **/
     
     /** Something went unhandled, do cleanup and exit anyway. **/
     
     console.error(err);
     
     /** FORCE exit the process too. **/
     process.exit(1);
});

/** Use another monitor process to restart the exiting process if needed. **/

/** Keep the event loop busy **/
process.stdin.resume();

/** Trigger a TypeError Exception "fake method" **/
console.fakeMethod();
