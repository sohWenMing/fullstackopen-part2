import React from 'react';
import services from '../services/phonebook'

function Person({person, removePerson}) {

    async function deletePerson() {
        const confirmed = confirm(`Are you sure you want to delete ${person.name}?`)
        if(confirmed) {
            try {
                const response = await services.deleteFromDatabase(person.id);
                removePerson(response.data.id);
            }
            catch {(error) => {
                console.log(error);
                }
            }
        }
       

    }


    return (
        <li>{person.name} {person.number} <button onClick={deletePerson}>Delete</button></li>
    )
}

export default Person;