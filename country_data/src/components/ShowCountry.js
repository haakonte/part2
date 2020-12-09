import React, {useState} from 'react'
import DisplayCountry from './DisplayCountry'

const ShowCountry = ({country}) => {

  const [toShow, setToShow] = useState(false)
  //gets in a country
  //adds a button underneath each country
  const handleShowCountry = () => {
    setToShow('true')
  }

  if (toShow) {
    return (
      <div>
        <DisplayCountry country = {country}/>
      </div>
    )
  } else {
    return (
      <div>
        <p>{country.name}</p>
        <button onClick = {handleShowCountry}>Show country</button>
      </div>
    )
  }
  

}

export default ShowCountry