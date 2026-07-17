import { useState } from "react";
import { WiRaindrop } from "react-icons/wi";


function FiveDayForecast({datafive}){

    
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
        <div className="h-35 w-35 border rounded-2xl flex flex-col justify-center items-center">
            <div className="text-2xl">{converter(obj.dt_txt)}</div>

            <div className="text-4xl">{obj.main.temp}</div>
            <div className="flex">
                <WiRaindrop /> {obj.pop} %
            </div>
        </div>
    ))



    return(
        <div className="forecastConatiner bg-white p-4">
            <div className="flex justify-center border rounded-t-2xl  items-start">
                <div className="flex gap-2 h-12 mt-1">
                    <button className="border border-b-0 w-20 rounded-t-2xl" onClick={()=> setSelectedDate(dates[0])}>Today</button>
                    <button className="border border-b-0 w-20 rounded-t-2xl" onClick={()=> setSelectedDate(dates[1])}>Tommorow</button>
                    <button className="border border-b-0 w-20 rounded-t-2xl" onClick={()=> setSelectedDate(dates[2])}>{days[2]}</button>
                    <button className="border border-b-0 w-20 rounded-t-2xl" onClick={()=> setSelectedDate(dates[3])}>{days[3]}</button>
                    <button className="border border-b-0 w-20 rounded-t-2xl" onClick={()=> setSelectedDate(dates[4])}>{days[4]}</button>
                </div>
            </div>

            <div className="flex min-h-40 border border-t-0 rounded-b-2xl items-center px-4 gap-2">
                {postcards}

            </div>
        </div>
    )
}

export default FiveDayForecast