import React from 'react'
import DisplayCountry from './DisplayCountry'
import ShowCountry from './ShowCountry'


const Matches = ({matches}) => {
  //getting a list of countries which match the search queries
  
  
  if (matches.length > 10) {
    return (
      <div>
        <p>Too many matches, be more specific</p>
      </div>
    )
  } else if (matches.length < 10 && matches.length > 1) {
    return (
      <div>
        {matches.map((country,i) => 
          <ShowCountry key={i} country = {country} />
        )}
      </div>
    )
  } else if (matches.length === 1) {
    const country = {...matches[0]}
    return (
      <DisplayCountry country={country}/>
    )
  } else {
    return (
      <div>
        <p>Please search for a country</p>
      </div>
    )
  }
}

export default Matches