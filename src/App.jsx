import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [weatherCity, setWeatherCity] = useState("")
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  
  const searchWeather = async function fetchWeather() {
    
    if(city.trim() === "") return

    let result

    try {
        
      setLoading(true)  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

      const response = await fetch(url)

      
      result = await response.json()
      if(!response.ok){
        throw new Error(result.message)
      }
      console.log(result)
      
      setData(result)
      setCity("")
      setWeatherCity(city)
    }

    catch(err){
      console.log(err)
    }

    finally{
      setLoading(false)
    }

  }

  

  return (
    <>
      <SearchBar city={city} setCity={setCity} searchWeather={searchWeather} />
    </>
  )
}

export default App
