import React from 'react'

const PersonForm = ({onSubmit, newName, newNumber, onChangeName, onChangeNumber}) => {
  return (
    <form onSubmit = {onSubmit}>
      <div>
        Name: <input value={newName} onChange = {onChangeName}/>
      </div>
      <div>
        Number <input value={newNumber} onChange = {onChangeNumber}/>
      </div>
      <div>
        <button type='submit'>Add person</button>
      </div>
    </form>
  )
}

export default PersonForm