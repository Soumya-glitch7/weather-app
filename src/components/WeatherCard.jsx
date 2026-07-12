import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
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

import { MdVisibility } from "react-icons/md";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

function WeatherCard({data}){
    const time = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
    });

    const date = new Date().toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

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

    const WeatherIcon = weatherIcons[data.weather[0].icon]

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });


    return(
        <>

        <div className="flex h-[50vh] justify-center items-center p-8 ">
            <div className="box flex flex-col border rounded-3xl h-full w-full">
                <div className="header">
                    <div className="flex justify-between p-2 px-6 text-lg items-center w-full">
                        <h1 >Current weather</h1>
                        <div className="flex flex-col text-sm ">
                            <div className="flex items-baseline">
                                <HiOutlineLocationMarker />
                                <h1>{data.name}</h1>
                            </div>
                            <div className="flex items-baseline gap-0.5">
                                <SlCalender />
                                <h1>{date}</h1>
                            </div>
                        </div>
                        <h1 >{time}</h1>
                    </div>
                </div>
                <div className="lineAfterHeader h-px self-stretch bg-black mx-8"></div>


                <div className="weatherDescription flex items-center flex-1 justify-around">

                    <div className=" iconAndTemperature flex scale-130" >
                
                        <WeatherIcon className="text-9xl"/>
                        
                        <div className="temp flex flex-col">
                            <div className="flex text-6xl items-baseline gap-0">
                                {data.main.temp}
                                <WiCelsius className="p-0"/>
                            </div>
                            <div className="flex font-cabinet gap-0">
                                <h4>Feels like: <span className="font-tanker font-normal">{data.main.feels_like}</span></h4>
                                <WiCelsius className="text-xl p-0"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="lineAfterHeader w-px self-stretch bg-black my-8"></div>

                    <div className="flex flex-col scale-120">

                        <div className="flex items-center">
                            <WiHumidity className="text-xl w-auto"/>
                            <h4>Humidity: <span  className="font-normal">{data.main.humidity}%</span></h4>
                        </div>

                        <div className="flex items-center">
                            <WiStrongWind/>
                            <h4>Wind: {data.wind.speed} <span className="font-normal">m/s</span></h4>
                        </div>

                        <div className="flex items-center">
                            <WiBarometer/>
                            <h4>Pressure: {data.main.pressure} <span className="font-cabinet text-sm font-bold">hPa</span></h4>
                        </div>
                        
                        <div className="flex items-center">
                            <WiSunrise/>
                            <h4>Sunrise: <span className="font-normal">{sunrise}</span></h4>
                        </div>

                        <div className="flex items-center">
                            <WiSunset/>
                            <h4>Sunset: <span className="font-normal">{sunset}</span></h4>
                        </div>                      

                    </div>


                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default WeatherCard 
