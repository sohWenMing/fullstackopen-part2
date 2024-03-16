import { useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function AddPerson(newPerson) {
    // setPersons(prev => {
    //   return (
    //     [...persons, newPerson]
    //   )
    // })
    return("hello!")
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addPerson={AddPerson}/>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App