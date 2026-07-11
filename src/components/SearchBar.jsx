import { useState } from "react"
import { IoSearch } from "react-icons/io5"

function SearchBar({city, setCity, searchWeather}){

    return(
        <>
        <div className=" border-0 flex flex-col justify-center items-center gap-12 min-h-[80vh] bg-[url('/fullclouds.png')] bg-cover bg-center">
            <h1 className="text-7xl font-bold text-blue-900 font-tanker">Welcome to WeatherToday</h1>
            <div className="scale-140 flex">
                <input
                maxLength={20}
                className="border rounded-l-xl h-10 px-2 outline-none bg-gray-200"
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
