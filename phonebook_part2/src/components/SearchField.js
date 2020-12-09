import React from 'react'

const SearchField = ({newSearch, onChange}) => {
  return (
    <div>
      Filter: <input value={newSearch} onChange={onChange}/>
    </div>
  )
}

export default SearchField