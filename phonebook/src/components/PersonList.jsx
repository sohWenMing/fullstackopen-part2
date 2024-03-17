import React from 'react';
import Person from './Person'

function PersonList({persons, removePerson}) {
    return (
        <ul>
            {persons.map((person) => <Person key={person.id} person={person} removePerson={removePerson}/>)}
        </ul> 
    )      
}

export default PersonList 