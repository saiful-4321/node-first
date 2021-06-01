const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("Hello World")
})

app.get('/api/courses', (request, response) => {
    response.send([1,2,3,4,5])
})

app.listen(3000, () => console.log('listening on port 3000....'))