import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  
  const searchWeather = async function fetchWeather() {
    

    let result

    try {
      
      setLoading(true)  
      setError("")
      
      const searchedCity = city.trim() || "Delhi";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;
      
      const response = await fetch(url)


      result = await response.json()
      console.log(result)
      setResult(result)
      if(!response.ok){
        throw new Error(result.message)
      }

      setData(result)
      setCity("")
    }
    
    catch(err){
      setError(err)
    }
    
    finally{
      setLoading(false)
    }
    
  }
  
const weatherBackgrounds = {
  '01d': '/backgrounds/sunny.png',
  '01n': '/backgrounds/night.png',

  '02d': '/backgrounds/cloudy.png',
  '02n': '/backgrounds/night.png',

  '03d': '/backgrounds/cloudy.png',
  '03n': '/backgrounds/night.png',
  
  '04d': '/backgrounds/cloudy.png',
  '04n': '/backgrounds/night.png',
  
  '09d': '/backgrounds/rain.png',
  '09n': '/backgrounds/rain.png',
  
  '10d': '/backgrounds/rain.png',
  '10n': '/backgrounds/rain.png',
  
  '11d': '/backgrounds/thunder.png',
  '11n': '/backgrounds/thunder.png',
  
  '13d': '/backgrounds/snow.png',
  '13n': '/backgrounds/snow.png',

  '50d': '/backgrounds/mist.png',
  '50n': '/backgrounds/mist.png',
};

const background = data
? weatherBackgrounds[data.weather[0].icon]
: '/backgrounds/default.png'

useEffect(()=>{
  searchWeather()
},[])

  return (
    <>
        <div className= "min-h-screen bg-cover bg-center  bg-fixed bg-no-repeat overflow-y-auto relative "
          style={{
            backgroundImage: `url(${background})`,
          }}
          >
          <div className='bg-black/35 absolute inset-0 '></div>  

          <div className="relative z-10">
            <SearchBar city={city} setCity={setCity} searchWeather={searchWeather} error= {error} result={result}/>
            {data && <WeatherCard data= {data} />}
          </div>
        </div>
    </>
  )
}

export default App
