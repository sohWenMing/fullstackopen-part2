const express = require('express');
const app = express();
const {generateId, generateBool} = require('./src/helper_functions/helpers')


app.use(express.json());

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

app.get('/', (req, res) => {
    res.json(notes);
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
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
    const note = req.body;
    console.log(note, typeof note);
    const keys = Object.keys(note);
    const values = Object.values(note);
    console.log("keys: ", keys);
    console.log("values: ", values);
    if(keys.length !== 2 || keys.length !== values.length) {
        res.status(404).end("Number of datapoints submitted is wrong");
    }
    if(keys[0] !== "content" || keys[1] !== "important") {
        console.log("wrong data");
        res.status(404).end("You're sending the wrong kind of data")
    }
    if(req.body.content === "" || !req.body.content) {
        res.status(404).end("content is mandatory");
    }
    const newId =  notes.length > 0 
                   ? generateId(notes) 
                   : 0;
    const boolForNote = generateBool(note.important);
    const content = note.content
    const newNote = {
        id: newId, 
        content: content, 
        important: boolForNote
    }
    notes = [...notes, newNote];
    res.status(200).end(JSON.stringify(notes));



    
    
    
    
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

const PORT = 3001;
app.listen(3001);
console.log(`Express app is running on port ${PORT}`);
