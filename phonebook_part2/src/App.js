import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import SearchField from './components/SearchField'
import personService from './components/Service'
import Notification from './components/Notification'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [toShow, setToShow] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setToShow(initialPersons)
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
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setToShow(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setErrorMessage(
            `${newPerson.name} was added to the phonebook`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
        .catch(error => {
          console.log('Could not do it')
        })
    } else {
      const replace = window
                        .confirm(`${newPerson.name} is already in the phonebook, replace the old number with a new one?`)
      if (replace) {
        const oldPerson = persons.find(person => person.name === newPerson.name)
        const newPerson_updated = {...oldPerson, number: newPerson.number}
        personService
          .update(newPerson_updated.id, newPerson_updated)
          .then(returnedPerson => {
            const persons_copy = persons.map(person => person.id === newPerson_updated.id ? returnedPerson : person)
            setPersons(persons_copy)
            setToShow(persons_copy)
            setNewName('')
            setNewNumber('')
            setErrorMessage(
              `${newPerson_updated.name}´s number was updated`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          }).catch(error => {
            setErrorMessage(
              `Information on ${newPerson_updated.name} was not found, it has been removed from the server`
            )
            setNewName('')
            setNewNumber('')
            personService
              .getAll()
              .then(initialPersons => {
                setPersons(initialPersons)
                setToShow(initialPersons)
              })
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
      }
    }
  }

  const deletePerson = (id) => {
    const obj_arr = persons.filter(person => person.id === id)
    const person = {...obj_arr[0]}
    const result = window.confirm(`Delete ${person.name} ?`)
    if (result) {
      personService
        .remove(id)
        .then(ignored => {
          const newPersons = persons.filter(person => person.id !== id)
          setPersons(newPersons)
          setToShow(newPersons)
        })
        .catch(error => {
          setErrorMessage(
            `Information on ${person.name} was not found, it has been removed from the server`
          )
          setNewName('')
          setNewNumber('')
          personService
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
              setToShow(initialPersons)
            })
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
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
      <SearchField newSearch = {newSearch} onChange = {handleSearchChange} displayAll = {() => setToShow(persons)}/>
      <h3>Add a new person to the phonebook</h3>
      <Notification message = {errorMessage}/>
      <PersonForm onSubmit ={addPerson} 
      newName = {newName} 
      newNumber = {newNumber} 
      onChangeName ={handleNameChange}
      onChangeNumber = {handleNumberChange} 
      />
      <h2>Numbers</h2>
        {/* <Phonebook persons = {toShow} ids = {toShow.map(person => person.id)}/> */}
        <div>
          {toShow.map((person, i) => 
            <Person key={i+1} person={person} onDelete = {() => deletePerson(person.id)}/>
          )}
        </div>
    </div>
  )
}

export default App
