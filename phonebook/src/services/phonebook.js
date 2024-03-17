import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

function getAll() {
    return(axios.get(baseUrl));
}

function create(personObject) {
    return(axios.post(baseUrl, personObject));
}

function deleteFromDatabase(id) {
    return(axios.delete(`${baseUrl}/${id}`))
}

function update(personObject) {
    return(axios.put(`${baseUrl}/${personObject.id}`, personObject));
}

export default {getAll, create, deleteFromDatabase, update}


