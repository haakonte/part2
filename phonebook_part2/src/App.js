import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [toShow, setToShow] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const inPersons = persons.filter(person => person.name === newPerson.name).length > 0
    if (!inPersons) {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    } else {
      alert(newName + ' is already in the phonebook')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    //here occurs the search logic
    //must
    setNewSearch(event.target.value)
    const string = newSearch
    if (string.length === 0) {
      setToShow(persons)
    } else {
      const shouldShow = persons.filter(person => person.name.includes(string))
      setToShow(shouldShow)
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={newSearch} onChange={handleSearchChange}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value = {newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add person</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {toShow.map((person, i) => 
            <Person key = {i} person = {person}/>
          )}
        </div>
    </div>
  )
}

export default App
