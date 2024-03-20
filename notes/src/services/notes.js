import axios from 'axios'
const baseUrl = "http://localhost:3001/api/notes"

function getAll() {
    return(axios.get(baseUrl))
}

function create(newObject) {
    return(axios.post(baseUrl, newObject))
}

function update(toggledNote) {
    return(axios.put(`${baseUrl}/${toggledNote.id}`, toggledNote))
}


export default {getAll, create, update}