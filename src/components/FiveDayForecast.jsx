import { useState } from "react";
import { WiRaindrop } from "react-icons/wi";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiSunrise,
  WiSunset,
  WiDayRain,
  WiNightAltRain,
  WiCelsius,
} from "react-icons/wi";


function FiveDayForecast({datafive}){

    
    const weatherIcons = {
        "01d": WiDaySunny,
        "01n": WiNightClear,

        "02d": WiDayCloudy,
        "02n": WiNightAltCloudy,

        "03d": WiCloud,
        "03n": WiCloud,

        "04d": WiCloudy,
        "04n": WiCloudy,

        "09d": WiShowers,
        "09n": WiShowers,

        "10d": WiDayRain,
        "10n": WiNightAltRain,

        "11d": WiThunderstorm,
        "11n": WiThunderstorm,

        "13d": WiSnow,
        "13n": WiSnow,

        "50d": WiFog,
        "50n": WiFog,
    };

    
    const groupedForecast = datafive.list.reduce((acc, obj)=>{
        const date = obj.dt_txt.split(" ")[0]
        
        if(!acc[date]){
            acc[date] = []
        }

        acc[date] = [...acc[date], obj] 
        
        return acc
    }, {})

    const days = Object.keys(groupedForecast).map((date)=>{
        const day = new Date(date).toLocaleDateString("en-IN", {
            weekday: "long",
        });
        
        return day
    })

    const weatherIcon = (icon) =>{
        const TempIcon = weatherIcons[icon]

        return <TempIcon/>
    }
    
    const dates = Object.keys(groupedForecast)
    const [selectedDate, setSelectedDate] = useState(dates[0])

    const converter = (dt_txt) => {

        

        const time = new Date(dt_txt).toLocaleTimeString("en-IN", {
            hour: "numeric",
            hour12: true,
        })

        return time
    }


    const postcards = groupedForecast[selectedDate].map((obj)=>(
        <div className="h-40 w-40 border rounded-2xl flex flex-col justify-center items-center">
            <div className="text-2xl">{converter(obj.dt_txt)}</div>
            <div className="text-7xl -my-2">{weatherIcon(obj.weather[0].icon)}</div>
            <div className="flex flex-col items-center">
                <div className="text-4xl">{obj.main.temp}</div>
                <div className="flex">
                    <WiRaindrop className="text-2xl"/> {obj.pop} %
                </div>
            </div>
        </div>
    ))



    return(
        <div className="forecastConatiner flex justify-center bg-white p-4">
            <div className=" w-fit">
                <div className="flex justify-center border rounded-t-2xl  items-start">
                    <div className="flex gap-2 h-15 mt-1">
                        <button className="border border-b-0 w-25 rounded-t-2xl text-xl" onClick={()=> setSelectedDate(dates[0])}>Today</button>
                        <button className="border border-b-0 w-25 rounded-t-2xl text-xl" onClick={()=> setSelectedDate(dates[1])}>Tommorow</button>
                        <button className="border border-b-0 w-25 rounded-t-2xl text-xl" onClick={()=> setSelectedDate(dates[2])}>{days[2]}</button>
                        <button className="border border-b-0 w-25 rounded-t-2xl text-xl" onClick={()=> setSelectedDate(dates[3])}>{days[3]}</button>
                        <button className="border border-b-0 w-25 rounded-t-2xl text-xl" onClick={()=> setSelectedDate(dates[4])}>{days[4]}</button>
                    </div>
                </div>
                <div className="grid grid-cols-8 min-h-50 border border-t-0 rounded-b-2xl items-center px-6 gap-6">
                    {postcards}
                </div>
            </div>
        </div>
    )
}

export default FiveDayForecast