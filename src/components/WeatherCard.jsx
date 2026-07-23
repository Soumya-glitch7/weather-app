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
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default;


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
    
    const weatherIconColors = {
        "01d": "text-yellow-400 drop-shadow-[0_0_12px_#facc15]",
        "01n": "text-indigo-300 drop-shadow-[0_0_12px_#a5b4fc]",

        "02d": "text-amber-300 drop-shadow-[0_0_10px_#fcd34d]",
        "02n": "text-slate-300 drop-shadow-[0_0_10px_#cbd5e1]",

        "03d": "text-gray-400 drop-shadow-[0_0_10px_#9ca3af]",
        "03n": "text-gray-500 drop-shadow-[0_0_10px_#6b7280]",

        "04d": "text-slate-500 drop-shadow-[0_0_10px_#64748b]",
        "04n": "text-slate-400 drop-shadow-[0_0_10px_#94a3b8]",

        "09d": "text-sky-400 drop-shadow-[0_0_12px_#38bdf8]",
        "09n": "text-blue-400 drop-shadow-[0_0_12px_#60a5fa]",

        "10d": "text-blue-500 drop-shadow-[0_0_12px_#3b82f6]",
        "10n": "text-blue-400 drop-shadow-[0_0_12px_#60a5fa]",

        "11d": "text-violet-500 drop-shadow-[0_0_14px_#8b5cf6]",
        "11n": "text-purple-400 drop-shadow-[0_0_14px_#c084fc]",

        "13d": "text-cyan-200 drop-shadow-[0_0_14px_#bae6fd]",
        "13n": "text-cyan-100 drop-shadow-[0_0_14px_#e0f2fe]",

        "50d": "text-zinc-400 drop-shadow-[0_0_10px_#a1a1aa]",
        "50n": "text-zinc-500 drop-shadow-[0_0_10px_#71717a]",
    };

    const weatherAnimations = {
        '01d': 'animate-sun',
        '01n': 'animate-moon',

        '02d': 'animate-float',
        '02n': 'animate-float',

        '03d': 'animate-float',
        '03n': 'animate-float',

        '04d': 'animate-float',
        '04n': 'animate-float',

        '09d': 'animate-rain',
        '09n': 'animate-rain',

        '10d': 'animate-rain',
        '10n': 'animate-rain',

        '11d': 'animate-flash',
        '11n': 'animate-flash',

        '13d': 'animate-snow',
        '13n': 'animate-snow',

        '50d': 'animate-fog',
        '50n': 'animate-fog',
    };

    const WeatherIcon = weatherIcons[data.weather[0].icon]

    const weatherAnimation = weatherAnimations[data.weather[0].icon];

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const visibility = data.visibility / 1000;

    const temperatureBgColor = ()=>{
        

        if(data.main.temp >= 35){
            return (<div className="flex text-5xl items-baseline gap-0 text-red-500 ">
                        <CountUp
                                key={data.main.temp}
                                end={data.main.temp}
                                duration=   {2}
                                enableScrollSpy
                        />
                        <WiCelsius className="p-0 -ml-3"/>
                    </div>)
        }
        if(data.main.temp < 15){
            return (<div className="flex text-5xl items-baseline gap-0 text-sky-400 ">
                        <CountUp
                            key={data.main.temp}
                            end={data.main.temp}
                            duration=   {2}
                            enableScrollSpy
                            decimals = {2}
                        />
                        <WiCelsius className="p-0 -ml-3"/>
                    </div>)
        }
        if(data.main.temp >= 29 && data.main.temp < 35){
            return (<div className="flex text-5xl items-baseline gap-0 text-orange-500 ">
                        <CountUp
                            key={data.main.temp}
                            end={data.main.temp}
                            duration=   {2}
                            enableScrollSpy
                            decimals = {2}
                        />
                        <WiCelsius className="p-0 -ml-3"/>
                    </div>)
        }
        if(data.main.temp >= 15 && data.main.temp < 29){
            return (<div className="flex text-5xl items-baseline gap-0 text-green-500 ">
                        <CountUp
                            key={data.main.temp}
                            end={data.main.temp}
                            duration=   {2}
                            enableScrollSpy
                            decimals= {2}
                        />
                        <WiCelsius className="p-0 -ml-3"/>
                    </div>)
        }
    }


    const weatherIconColor = weatherIconColors[data.weather[0].icon]

    return(
        <>

        <div className="flex h-fit justify-center  p-4 text-white">
            <div className="box flex flex-col border-0 rounded-3xl h-full w-full bg-linear-to-r from-black  to-slate-900 shadow-[0_0_5px_white, 0_0_7px_white]">
                <div className="header">
                    <div className="flex justify-between p-2 px-6 text-lg items-center w-full">
                        <h1 >Current weather</h1>
                        <div className="flex flex-col text-sm ">
                            <div className="flex items-baseline">
                                <HiOutlineLocationMarker />
                                <h1>{data.name}, {data.sys.country}</h1>
                            </div>
                            <div className="flex items-baseline gap-0.5">
                                <SlCalender />
                                <h1>{date}</h1>
                            </div>
                        </div>

                        <h1 >Last updated: {time}</h1>
                    </div>
                </div>
                <div className="lineAfterHeader h-px self-stretch bg-gray-500 mx-8"></div>


                <div className="weatherDescription flex items-center flex-1 justify-evenly w-full">

                    <div className="flex">
                        <div className=" iconAndTemperature flex scale-130 items-center h-[30%]" >
                            <WeatherIcon className={`text-9xl ${weatherIconColor} ${weatherAnimation}`}/>
                        
                            <div className="temp flex flex-col mb-4 w-45">
                                {temperatureBgColor()}
                                <div className="flex font-cabinet gap-0">
                                    <h4 className="text-sm">Feels like: <span className="font-tanker font-normal">{data.main.feels_like}</span></h4>
                                    <WiCelsius className="text-xl p-0 -ml-1"/>
                                </div>
                                <h4 className={`text-sm border rounded-lg w-25 flex justify-center text-white`}>{data.weather[0].description}</h4>
                                
                            </div>
                        
                        </div>
                    </div>

                    <div className="w-px h-60 bg-linear-to-b from-transparent via-gray-500 to-transparent py-8"/>

                    <div className="flex flex-col text-xl gap-2 flex-wrap h-60 w-[40%] p-8">

                        <div className="flex flex-col p-2  rounded-lg bg-slate-900/60 border-white border-8">
                            <WiHumidity   className="text-xl"/>
                            <h4>Humidity: <span  className="font-normal">{data.main.humidity}%</span></h4>
                        </div>

                        <div className="flex flex-col p-2 border-white border-8 rounded-lg bg-slate-900/60">
                            <WiStrongWind className="text-xl"/>
                            <h4>Wind: {data.wind.speed} <span className="font-normal">m/s</span></h4>
                        </div>

                        <div className="flex flex-col p-2 border-white border-8 rounded-lg bg-slate-900/60">
                            <WiBarometer  className="text-xl"/>
                            <h4>Pressure: {data.main.pressure} <span className="font-cabinet text-sm font-bold">hPa</span></h4>
                        </div>
                        
                        <div className="flex flex-col p-2 border-white border-8 rounded-lg bg-slate-900/60">
                            <WiSunrise  className="text-xl"/>
                            <h4>Sunrise: <span className="font-normal">{sunrise}</span></h4>
                        </div>

                        <div className="flex flex-col p-2 border-white border-8 rounded-lg bg-slate-900/60">
                            <WiSunset  className="text-xl"/>
                            <h4>Sunset: <span className="font-normal">{sunset}</span></h4>
                        </div>                      
                        
                        <div className="flex flex-col p-2 gap-0.5 border-white border-8 rounded-lg bg-slate-900/60">
                            <MdVisibility  className="text-xl"/>
                            <h4>Visibility: <span className="font-normal">{visibility}km</span></h4>
                        </div>                      

                    </div>


                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default WeatherCard 
