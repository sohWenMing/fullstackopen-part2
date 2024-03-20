import { useState, useEffect } from 'react'
import NoteList from './components/NoteList'
import Form from './components/Form'
import noteService from './services/notes'

function App() {
  const [notes, setNotes] = useState([]);

 function hook() {
  console.log("now we're in the first hook")
  noteService.getAll()
  .then((res) => {
    console.log(res);
  })
 
 }

  

 function updateNotes(noteObject) {
  const updatedNotes = notes.map((note) => {
    if(note.id === noteObject.id) {
      return(noteObject)
    }
    else {
      return(note);
    }
  })
  setNotes(prev => updatedNotes);
 }
 

 function addToNotes(noteObject) {
  setNotes(prev => [...notes, noteObject]);
 }
 useEffect(hook, []);


  return (
   <>
   <NoteList notes={notes} updateNotes={updateNotes} setNotes={setNotes} />
   <Form notes={notes} addToNotes={addToNotes}/>
   </>
  )
  
}


export default App
