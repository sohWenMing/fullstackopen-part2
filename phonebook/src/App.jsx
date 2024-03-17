import { useState, useEffect} from 'react'
import PersonList from './components/PersonList'
import Header from './components/Header'
import Input from './components/Input'
import Form from './components/Form'
import services from './services/phonebook'

function App() {
  const [persons, setPersons] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  


  function firstRun() {
    services.getAll().then((res) => {
      const data = res.data;
      setPersons(prev => data);
    })
  }

  function updateChange(event) {
    const value = event.target.value;
    if(event.target.id === "input_search") {
      setSearchFilter(prev => value);
    }
    if(event.target.id === "input_name") {
      setName(prev => value);
    }
    if(event.target.id ==="input_number") {
      setNumber(prev => value);
    }
  }

  function filterPersons() {
    if(searchFilter === "") {
      return(persons)
    }
    else {
      const filteredPersons = persons.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchFilter.toLowerCase())
        )
      })
      return filteredPersons;

    }
   
  }
  function updateFiltered() {
  setFilteredPersons(prev => [...filterPersons()])
  }

  function addPerson(personObject) {
    setPersons((prev) => {
      return (
        [...persons, personObject]
      )
    })
  }

  function updatePerson(personList) {
    setPersons((prev) => {
      return (
        personList
      )
    })
  }



  function removePerson(id) {
    setPersons((prev) => {
      console.log(`id passed into removePerson: ${id}`);
      return (
        persons.filter((person) => {  
          return (
            person.id != id
          )
        })
      )
    })
  }
  

  useEffect(firstRun, []);
  useEffect(updateFiltered,[persons]);
  useEffect(updateFiltered, [searchFilter])
  return (
    <>
      <Header text="search"/>
      <Input  id={"input_search"} onChange={updateChange} labelText={"Search"} />
      <Form onChange={updateChange} persons={persons} addPerson={addPerson} updatePerson={updatePerson}/> 
      <PersonList persons={filteredPersons} removePerson={removePerson} />
    </>
    
  )
}

export default App
