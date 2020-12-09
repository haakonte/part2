import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SearchField from './components/SearchField'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setData(response.data)
      })
  }, [])
  
  return (
    <SearchField data = {data}/>
  )
}


export default App;
