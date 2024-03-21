import {React, useEffect} from 'react';
import Note from './Note'
import axios from 'axios';
import noteService from '../services/notes'

function NoteList({notes, updateNotesAfterResponse, setNotes}) {

    function toggleImportance(id) {
        let toggledNote = notes.find(note => note.id === id);
        toggledNote = {
            ...toggledNote,
            important: !toggledNote.important
        }
        noteService.update(toggledNote)
        .then((res) => {
            console.log("res after toggle:", res);
            updateNotesAfterResponse(res.data);  
        }).catch((error) => {
            alert(`${toggledNote.content} does not exist in the database anymore!`);
            setNotes(prev => notes.filter((note) => {
                return(note.id !== toggledNote.id)
            }))
        })
    }   
    return(
    <ul>
    {notes.map((note) => {
      return (
        <Note key={note.id} note={note} toggleImportance={toggleImportance}/>
      )
    })}
    
 </ul>
    
    )
}

export default NoteList;