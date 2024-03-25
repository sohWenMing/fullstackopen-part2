import React from 'react';
import services from '../services/phonebook'

function Person({person, removePerson, updateMessage}) {

    async function deletePerson() {
        const confirmed = confirm(`Are you sure you want to delete ${person.name}?`)
        if(confirmed) {
            try {
                const response = await services.deleteFromDatabase(person.id);
                console.log("Response: ", response);
                removePerson(Number(response.data));
                updateMessage (
                    `${person.name} was successfully removed from database`,
                    "success"
                )
            }
            catch (error) {
                console.error(error)
                removePerson(person.id);
                updateMessage(
                    `${person.name} was previously deleted from database`
                )
            }
        }
        }


    return (
        <li>{person.name} {person.number} <button onClick={deletePerson}>Delete</button></li>
    )
}

export default Person;