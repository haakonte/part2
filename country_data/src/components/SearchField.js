import React, {useState} from 'react'
import Matches from './Matches'

const SearchField = ({data}) => {
  //should make a small field,
  const [newSearch, setNewSearch] = useState('')
  const [newMatches, setNewMatches] = useState([])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    setNewMatches(data.filter(country => country.name.includes(newSearch)))
  }

  return (
    <div>
      Find country/countries: <input value={newSearch} onChange={handleSearchChange}/>
      <Matches matches = {newMatches}/>
    </div>
  )
}

export default SearchField