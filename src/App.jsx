import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {

  const defaultURL = "https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid=6d11e6818c1295c611bcee44e3a9d35f&units=metric"
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
