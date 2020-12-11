import React from 'react'

const SearchField = ({newSearch, onChange, displayAll}) => {
  return (
    <div>
      Filter: <input style={{display:'inline'}} value={newSearch} onChange={onChange}/>
      <button onClick = {displayAll}>Display All</button>
    </div>
  )
}

export default SearchField