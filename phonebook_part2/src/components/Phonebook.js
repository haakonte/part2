import React from 'react'
import Person from './Person'

const Phonebook = ({persons, ids}) => {
  
  return (
    <div>
      {persons.map((p, i) => 
        <Person key={i} person = {p}/>
      )}
    </div>
  )
}

export default Phonebook