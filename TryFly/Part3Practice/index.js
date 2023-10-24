const express = require('express')
const app = express()
const cors = require('cors')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
  
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json())
app.use(requestLogger)
app.use(cors())
app.use(express.static('dist'))

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]
  
app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})
app.get('/api/notes', (request, response) => {
    response.json(notes)
})
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(n => n.id === id)
    
    //render note's json or return 404 if note with specified id DNE
    if (note) {
        return response.json(note)
    }
    else {
        return response.status(404).end()
    }
})
app.delete('/api/notes/:id', (request, response) => {

    const id = Number(request.params.id)
    notes = notes.filter(n => n.id !== id)

    
    response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0 
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}
app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newObject = {
        content: body.content,
        important: body.important || false,
        id: generateId()
    }

    notes = notes.concat(newObject)

    response.json(newObject)
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
