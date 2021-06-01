const express = require('express')
const app = express()

const courses = [
    { id : 1, name : 'Course 1'},
    { id : 2, name : 'Course 2'},
    { id : 3, name : 'Course 3'}
]

app.get('/', (request, response) => {
    response.send("Hello World v2")
})

app.get('/api/courses', (request, response) => {
    response.send(courses)
})

app.get('/api/courses/:id', (request, response) => {
    const course = courses.find(data => data.id === parseInt(request.params.id))

    if(!course) response.status(404).send('Course not found.')

    response.send(course)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}....`))