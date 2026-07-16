import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import "weather-icons/css/weather-icons.css";

function SearchBar({city, setCity, searchWeather}){

    return(
        <>
        <div className=" border-0 flex flex-col justify-center items-center gap-12 min-h-[50vh] ">
            <h1 className="text-7xl font-bold text-white font-tanker">Welcome to WeatherToday</h1>
            <div className="scale-140 flex">
                <input
                maxLength={20}
                className="border rounded-l-xl h-10 px-2 outline-none bg-gray-200 w-60"
                placeholder="Search a city"
                value= {city}
                onChange={(e)=> setCity(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key === "Enter"){
                        searchWeather()
                    }
                    }
                }
                />
                <button className="border rounded-r-xl h-10 px-3 text-xl bg-gray-400" onClick={searchWeather}><IoSearch /></button>
            </div>
        </div>
        </>
    )
}

export default SearchBar
