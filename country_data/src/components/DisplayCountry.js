import React from 'react'


const DisplayCountry = ({country}) => (
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

export default DisplayCountry