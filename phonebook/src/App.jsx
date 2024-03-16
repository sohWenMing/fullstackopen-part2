import { useState, useEffect} from 'react'
import axios from 'axios'
import PersonList from './components/PersonList'
import Header from './components/Header'
import Input from './components/Input'
import Form from './components/Form'

function App() {
  const [persons, setPersons] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);


  function firstRun() {
    axios.get("http://localhost:3001/persons").then((res) => {
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
  

  useEffect(firstRun, []);
  useEffect(updateFiltered,[persons]);
  useEffect(updateFiltered, [searchFilter])
  return (
    <>
      <Header text="search"/>
      <Input  id={"input_search"} onChange={updateChange} labelText={"Search"} />
      <Form onChange={updateChange}/>
      <PersonList persons={filteredPersons} />
    </>
    
  )
}

export default App
