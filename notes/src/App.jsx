import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([]);

 function hook() {
  axios.get("http://localhost:3001/notes").then((res) => {
    const notesToUpdate = res.data;
    console.log("promise fulfilled")
    setNotes(prev => notesToUpdate);
  })
 }

 useEffect(hook, []);
 console.log("render: ", notes.length);
  


  return (
   <>
   hello world 
   </>
  )
}

export default App
