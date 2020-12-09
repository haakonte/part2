import React, {useState, useEffect} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const DisplayCountry = ({country}) => {
  
  const [temperature, setTemperature] = useState(0)
  const [wind, setWind] = useState(0)

  useEffect(() => {
      if (country.capital === '') {
        setTemperature('No data')
        setWind('No data')
      } else {
        axios
        // eslint-disable-next-line
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key} `)
        .then(response => {
          setTemperature(response.data.main.temp)
          setWind(response.data.wind.speed)
        })
      }
  // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital {country.capital === '' ? 'No data' : country.capital}</p>
      <p>Population {country.population === 0 ? 'No data' : country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language,i) => 
          <li key={i}>{language.name}</li>
        )}
      </ul>
      <div>
        <img src={country.flag} height='100' alt=''/>
      </div>
        <h3>Weather in {country.capital}</h3>
        <p><strong>temperature: </strong> {country.capital === '' ? 'No data' : (Math.round((temperature - 273.15) * 100) / 100).toFixed(2)} °Celsius</p>
        <p><strong>wind: </strong> {wind} m/s</p>
    </div>
  )
}

export default DisplayCountry