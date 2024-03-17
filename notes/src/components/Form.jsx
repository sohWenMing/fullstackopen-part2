import React from 'react';

import noteService from '../services/notes'

function Form({notes, addToNotes}) {
    function handleSubmit(event) {
        event.preventDefault();
        const value = document.getElementById("add_input").value;
        if(value === "") {
            alert('note cannot be blank');
        }
        else {
            const noteObject = {
                content: value,
                important: Math.random() < 0.5
            }
            noteService.create(noteObject)
            .then((res) => {
                try {
                const noteToAdd = res.data;
                addToNotes(noteToAdd);
                } catch (error){
                    console.error("Error in .then() block: ", error.message)
                }
            })
            .catch((error) => {
                alert("there was an error");
            })
           
            
        }
       
    }
    
    return (
        <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor="add_input">Add note</label>
        </div>
        <div>
            <input type="text" id="add_input"/>
        </div> 
        <button>Add new note</button>
        </form>
    )

}

export default Form;