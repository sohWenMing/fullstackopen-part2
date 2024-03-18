import React from 'react';
import Person from './Person'

function PersonList({persons, removePerson, updateMessage}) {
    return (
        <ul>
            {persons.map((person) => <Person key={person.id} person={person} removePerson={removePerson} updateMessage={updateMessage}/>)}
        </ul> 
    )      
}

export default PersonList 