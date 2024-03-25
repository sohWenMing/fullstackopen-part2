import { useState, useEffect} from 'react'
import PersonList from './components/PersonList'
import Header from './components/Header'
import Input from './components/Input'
import Form from './components/Form'
import services from './services/phonebook'
import Message from './components/Message'

function App() {
  const [persons, setPersons] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("")

  function updateMessage(message, messageType) {
    setMessage(prev => message)
    setMessageType(prev => messageType);
  }
  
  
  function firstRun() {
    services.getAll().then((res) => {
      const data = res.data;
      setPersons(prev => data.persons);
      setFilteredPersons(prev => data.persons);
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
    if(searchFilter === "" ) {
      console.log("Filtered persons ran");
      console.log("Persons: ", persons);
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
    console.log("remov person function ran");
    console.log(`Id passed in: ${id}, Type of id: ${typeof(id)}`)
    const personFilter = persons.filter(person => person.id !== id);
    const filteredFilter = filteredPersons.filter(person => person.id !== id);
    setPersons(prev => personFilter);
    setFilteredPersons(prev => filteredFilter);
  }
  

  useEffect(firstRun, []);
  // useEffect(updateFiltered,[persons]);
  useEffect(updateFiltered, [searchFilter])
  useEffect(() => {
    console.log("Persons:" , persons);
    console.log("filteredPersons: ", filteredPersons);

  }, [persons, filteredPersons])
  useEffect(updateFiltered, [persons]);
  useEffect(() => {
    if(messageType !== "") {
      setTimeout(() => {
        setMessageType(prev => "")
      }, 5000)
    }

  }, [messageType])
  return (
    <>
      <Header text="search"/>
      {messageType !="" && <Message message={message} messageType={messageType}/>}
      <Input  id={"input_search"} onChange={updateChange} labelText={"Search"} />
      <Form onChange={updateChange} persons={persons} addPerson={addPerson} updatePerson={updatePerson} updateMessage={updateMessage}/> 
      <PersonList persons={filteredPersons} removePerson={removePerson} updateMessage={updateMessage}/>
    </>
    
  )
}

export default App
