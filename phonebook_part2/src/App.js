import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    const inPersons = persons.filter(person => person.name === newPerson.name).length > 0
    if (!inPersons) {
      setPersons(persons.concat(newPerson))
      setNewName('')
    } else {
      alert(newName + ' is already in the phonebook')
    }
    
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">Add person</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {persons.map((person, i) => 
            <Person key = {i} person = {person}/>
          )}
        </div>
    </div>
  )
}

export default App
