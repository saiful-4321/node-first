const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send("Hello World v2")
})

app.get('/api/courses', (request, response) => {
    response.send([1,2,3,4,5])
})

app.get('/api/courses/:year/:id', (request, response) => {
    // getting all params
    // response.send(request.params)

    // getting all query string
    response.send(request.query)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`))