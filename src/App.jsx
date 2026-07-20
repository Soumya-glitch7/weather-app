import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import FiveDayForecast from './components/FiveDayForecast'
import AqiMeter from './components/AqiMeter'


function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const [datafive, setDataFive] = useState(null)
  const [dataAqi, setDataAQI] = useState(null)
  const [dataAqiValue, setDataAQIValue] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState(null)
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const aqiApiKey = import.meta.env.VITE_AQI_API_KEY

  
  
  const searchWeather = async function fetchWeather() {
    

    let result
    let resultfive
    let resultaqi
    let resultaqivalue

    try {
      
      setLoading(true)  
      setError("")
      
      const searchedCity = city.trim() || "Delhi";


      const lat = data ? (data.coord.lat) : (28.6667)
      const lon = data ? (data.coord.lon) : (77.2167)

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;

      const fiveDayUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=metric`
      
      const AQIValueUrl=`https://api.waqi.info/feed/${searchedCity}/?token=${aqiApiKey}`
      
      const AQIUrl=`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
      const response = await fetch(url)
      const responsefive = await fetch(fiveDayUrl)
      const responseAQI = await fetch(AQIUrl)
      const responseAQIvalue = await fetch(AQIValueUrl)

      resultfive = await responsefive.json()
      result = await response.json()
      resultaqi = await responseAQI.json()
      resultaqivalue = await responseAQIvalue.json()
      console.log(resultfive)
      console.log(result)
      console.log(resultaqi)
      console.log(resultaqivalue)
      if(!response.ok){
        throw new Error(result.message)
      }
      
      setDataFive(resultfive)
      setData(result)
      setDataAQI(resultaqi)
      setDataAQIValue(resultaqivalue)
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
            <div className="flex">
              {data && <FiveDayForecast datafive = {datafive}/>}
              {data && <AqiMeter dataAqi = {dataAqi} dataAqiValue = {dataAqiValue}/>}
            </div>
          </div>
        </div>
    </>
  )
}

export default App
