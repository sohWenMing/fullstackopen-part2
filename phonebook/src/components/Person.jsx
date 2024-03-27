import React from 'react';
import services from '../services/phonebook'

function Person({person, removePerson, updateMessage, firstRun}) {

    async function deletePerson() {
        const confirmed = confirm(`Are you sure you want to delete ${person.name}?`)
        if(confirmed) {
            try {
                const response = await services.deleteFromDatabase(person.id);
                console.log("response after deleting: ", response);
                console.log("Response: ", response);
                if(!response.data.deletedPerson) {
                    throw new Error("Person was already removed from the database")
                }
                firstRun()
                updateMessage (
                    `${person.name} was successfully removed from database`,
                    "success"
                )
            }
            catch (error) {              
                updateMessage(
                    `${error.message}`
                )
                firstRun()
            }
        }
        }


    return (
        <li>{person.name} {person.number} <button onClick={deletePerson}>Delete</button></li>
    )
}

export default Person;