require('dotenv').config()
const express = require('express');
const app = express();
const {generateId, generateBool} = require('./src/helper_functions/helpers')
const cors = require('cors')
const Note = require('./models/note')


app.use(cors());
app.use(express.json());
app.use(express.static('dist'))
//serves static files from the dist folder

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only JavaScript",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       important: true
//     }
//   ]

app.get('/api/notes', (req, res) => {
    Note.find({}).then((notes) => {
        res.json(notes)
    })
})

app.get('/api/notes/:id', (req, res) => {
    const errorHTML = '<h1>HAHAHAHAHHAHAHAHAHAHA SUCKER</h1>'
    const id = req.params.id;
    console.log("request id type: ", typeof id);
    console.log("id requested: ", id);
    const note = notes.find((note) => {
        
        return (
            note.id.toString() === id
        )
    })
    if(note) {
        res.json(note);
    }
    else {
        res.status(404).end(errorHTML)
    }
})

app.post('/api/notes', (req, res) => {
    const body = req.body;
    if (body.content === undefined) {
        return res.status(400).json({error: "content missing"})
    }
    const note = new Note({
        content: body.content, 
        important: body.important || false
    })
    note.save().then((savedNote) => {
        response.status(200).json(savedNote)
    })
})

app.put('/api/notes/:id' , (req, res) => {
    const id = Number(req.params.id);
    console.log("id type: ",typeof(id))
    console.log("body from put: ", req.body);
    const foundIndex = notes.findIndex(note => note.id === id);
    console.log("FoundIndex: ", foundIndex);
    console.log("note before change: ", notes[foundIndex]);

    if(foundIndex !== -1) {
        notes[foundIndex].important = !notes[foundIndex].important;
        console.log("note after change: ", notes[foundIndex]);
        res.status(200).json(notes);
    }
    else {
        res.status(404).end("The record could not be found.")
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    
    const note = notes.find((note) => note.id === id);
    notes = notes.filter((note) => note.id !== id);
    if(note) {
        res.status(204).end()
    }
    else {
        res.status(404).end("There was nothign found there. try again.")
    }
    
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})