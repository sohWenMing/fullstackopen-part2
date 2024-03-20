import { useState, useEffect } from 'react'
import NoteList from './components/NoteList'
import Form from './components/Form'
import noteService from './services/notes'

function App() {
  const [notes, setNotes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

 function hook() {
  console.log("now we're in the first hook")
  noteService.getAll()
  .then((res) => {
    setNotes(notes => res.data);
    setIsLoaded(prev => true)
  })
  .catch((err) => {
    setIsError(prev => true)
    setIsLoaded(prev => true)
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

 if(!isLoaded) {
  return <div>Loading....</div>
 }
  return (
   <>
    {isError ? (
      <h1>HAHAHAHAHAHAHAH stupid</h1>
    ) : (
      <>
    <Form notes={notes} addToNotes={addToNotes}/>
   <NoteList notes={notes} updateNotes={updateNotes} setNotes={setNotes} />
      </>
    )
    }
  </>
  )
  }


export default App
