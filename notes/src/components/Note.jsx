import React from 'react';

function Note({note, toggleImportance}) {
    return (
        <div className ="list-align-center">
        <li className={"note " + (note.important ? "important" : "")}>
            {note.content}
        </li>
         <button onClick={() => toggleImportance(note.id)}>Toggle importance</button>
         </div>
    )


}

export default Note;