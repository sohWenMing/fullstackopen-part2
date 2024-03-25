function generateId(notes) {
    const newId = notes.length + 1;
    return newId;
}

function generateBool(bool) {
    console.log("bool passed into generateBool: ", bool);
    let boolOutput = null;
    if(typeof bool === 'boolean') {
        boolOutput = bool
    }
    if(!bool || typeof bool !== 'boolean') {
        boolOutput = false;
    }
    return boolOutput;
}



module.exports = {
    generateId, 
    generateBool
}