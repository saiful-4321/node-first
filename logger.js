const EventEmitter = require('events');
var url = 'https://logger.io/log'
class Logger extends EventEmitter {
    log(message) {
        // http request goes here
        console.log(message)

        // Raise an event
        this.emit('messageLogged', { id: 1, message: "Message 1" });
    };
}
module.exports = Logger;