function filterNotes(noteInput, notes) {
    const filteredNotes = notes.filter((note) => {
        console.log("noteInput: ", noteInput);
        console.log("notes: ", notes);
        
        
        return (
            note.content.toLowerCase().trim() === noteInput.content.toLowerCase().trim()
        )
    })
    const output = {
        filteredNote: filteredNotes.length > 0 ? 
                      filteredNotes[0] : null,
        isFound:    filteredNotes.length > 0
    }
    console.log("output: ");
    

    return output
}

export default filterNotes;