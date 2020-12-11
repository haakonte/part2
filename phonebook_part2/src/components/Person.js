import React from 'react'

const Person = ({person, onDelete}) => {
  return (
    <div>
      <p style={{display:'inline'}}>{person.name} {person.number}</p>
      <button onClick = {onDelete}>Delete</button> 
    </div>
  )
}

export default Person