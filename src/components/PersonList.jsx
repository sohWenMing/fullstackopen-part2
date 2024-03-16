import React from 'react';
import Person from './Person'

function PersonList({persons}) {
    console.log("persons form PersonList: ", persons)
    return (
        <ul>
            {
                persons.map((person) => {
                    return (
                        <Person key={person.name} person={person}/>
                    )
                })
            }
        </ul>
    )
   

}

export default PersonList