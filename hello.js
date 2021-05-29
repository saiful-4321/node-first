// const logger = require('./logger')
// logger.log("This is a message")

// path module
// const path = require('path')
// const fileObj = path.parse(__filename)
// console.log(fileObj)

// os module
// const os = require('os')
// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();
// console.log(`Total memory is: ${totalMemory}`)
// console.log(`Free memory is: ${freeMemory}`)

// event module
// const EventEmitter = require('events');
// const Logger = require('./logger')
// const logger = new Logger()

// logger.on('messageLogged', function(args) {
//     console.log('Listeners called', args);
// })

// logger.log('This is the message');

// server module
const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.write('Hello world.')
        response.end()
    }

    if(request.url === '/about') {
        response.write('Hello About us.')
        response.end()
    }
})


server.listen(3000)

console.log('Listening on port 3000....')