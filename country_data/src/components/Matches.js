import React from 'react'


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
          <p key={i}>{country.name}</p>
        )}
      </div>
    )
  } else if (matches.length === 1) {
    const country = {...matches[0]}
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map((language,i) => 
            <li key={i}>{language.name}</li>
          )}
        </ul>
        <div>
          <img src={country.flag} height='100' alt=''/>
        </div>
      </div>
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