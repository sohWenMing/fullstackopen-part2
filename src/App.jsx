import { useState, useEffect } from 'react'
import Form from './components/Form'
import PersonList from './components/PersonList'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "1234"
  
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setNewSearch] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    filterPersons()
  },[persons, search])

  function trackChange(event) {
    if(event.target.id === 'name_input') {
      setNewName(prev => event.target.value);
    }
    if(event.target.id === 'number_input') {
      setNewNumber(prev => event.target.value);
    }
    if(event.target.id ==='search_input') {
      setNewSearch(prev => event.target.value);
    }
  }

  function addPerson(newPerson) {
    let alertString = ""
    const IsNameExists = persons.some((person) => {
      return (
        newPerson.name.toLowerCase() === person.name
      )
    });
    const isNumberFilled = newPerson.number !== "";
    if(IsNameExists) {
      alertString += "Person already exists in phonebook!"
    }
    if(!isNumberFilled) {
      alertString += " Number field is mandatory!"
    }
    if(!IsNameExists && isNumberFilled) {
      const newPersonObject = {
         name: newPerson.name,
         number: newPerson.number
      }
      setPersons(pervPersons => [...persons, newPersonObject]);
    }
    else {
      alert(alertString);
    }
    
  }


  function filterPersons() {
    if(search === "") {
      setFilteredPersons(prev => persons);
    }
    else {
      const filteredPersons = persons.filter((person) => {
        return(person.name.toLowerCase().includes(search.toLowerCase()))
      })
      setFilteredPersons(prev => filteredPersons);
    }
  }



  

  

  return (
    <div>
      <Search trackChange={trackChange}/>
      <h2>Phonebook</h2>
      <Form addPerson={addPerson} trackChange={trackChange} currentPersons={persons}/>
      <h2>Numbers</h2>
      <PersonList persons={filteredPersons} />
    </div>
  )
}

export default App