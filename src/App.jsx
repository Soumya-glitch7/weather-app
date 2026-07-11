import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  
  const searchWeather = async function fetchWeather() {
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      if(city.trim() === "") return

      const response = await fetch(url)
      const result = await response.json()
      console.log(result)

      setData(result)
  }

  

  return (
    <>
      <SearchBar city={city} setCity={setCity} searchWeather={searchWeather} />
    </>
  )
}

export default App
