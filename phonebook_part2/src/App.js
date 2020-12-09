import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Phonebook from './components/Phonebook'
import SearchField from './components/SearchField'
import axios from 'axios'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [toShow, setToShow] = useState(persons)

  useEffect(() => {
    console.log('started effect')
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
        setToShow(response.data)
      })
  }, [])


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
    if (string === '') {
      setToShow(persons)
    } else {
      const shouldShow = persons.filter(person => person.name.slice(0,string.length).includes(string))
      setToShow(shouldShow)
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField newSearch = {newSearch} onChange = {handleSearchChange}/>
      <h3>Add a new person to the phonebook</h3>
      <PersonForm onSubmit ={addPerson} 
      newName = {newName} 
      newNumber = {newNumber} 
      onChangeName ={handleNameChange}
      onChangeNumber = {handleNumberChange} 
      />
      <h2>Numbers</h2>
        <Phonebook persons = {toShow}/>
    </div>
  )
}

export default App
