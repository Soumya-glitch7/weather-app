import { useState } from "react"
import { IoSearch } from "react-icons/io5"

function SearchBar(){
    const [city, setCity] = useState("")

    return(
        <>
        <div className=" border-0 flex flex-col justify-center items-center gap-12 min-h-screen bg-[url('/fullclouds.png')] bg-cover bg-center">
            <h1 className="text-8xl font-bold text-blue-900 font-tanker">Welcome to WeatherToday</h1>
            <div className="scale-150 flex">
                <input
                maxLength={20}
                className="border rounded-l-xl h-10 px-2 outline-none"
                placeholder="Search a city"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                />
                <button className="border rounded-r-xl h-10 px-3 text-xl "><IoSearch /></button>
            </div>
        </div>
        </>
    )
}

export default SearchBar
