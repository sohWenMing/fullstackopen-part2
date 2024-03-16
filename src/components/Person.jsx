import React from 'react';
function Person({person}) {

    console.log("Person from Person component: ", person)
    return (
        <li key={person.name}>Name: {person.name} Number: {person.number}</li>
    )
}
export default Person;