import React from 'react';

function Note({note, toggleImportance}) {
    return (
        <li>{note.content} <button onClick={() => toggleImportance(note.id)}>Toggle importance</button></li>
    )

}

export default Note;