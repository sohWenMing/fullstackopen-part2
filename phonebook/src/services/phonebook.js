import axios from 'axios'

const baseUrl = "/persons"

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
    console.log("update function ran")
    return(axios.put(`${baseUrl}/${personObject.id}`, personObject));
}

export default {getAll, create, deleteFromDatabase, update}


 