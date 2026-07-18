import { useRef, useState,useEffect } from "react";
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
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function FiveDayForecast({datafive}){
    
    
    const [showLeft, setShowLeft] = useState("hidden")
    const [showRight, setShowRight] = useState("block")
    const containerRef = useRef(null)
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

    const scrollRight = () =>{
        containerRef.current.scrollBy(
            {
                left: 1,
                behavior: "smooth"
            }
        )
    }
    
    const scrollLeft = () =>{
        containerRef.current.scrollBy({
                left: -1,
                behavior: "smooth"
            })
    }



    const postcards = groupedForecast[selectedDate].map((obj)=>(
        <div className="w-46 snap-start p-3">
            <div className="h-40 w-40 border-0 rounded-2xl flex flex-col justify-center items-center shrink-0 bg-[#617e5f] text-white">
                <div className="text-2xl">{converter(obj.dt_txt)}</div>
                <div className="text-7xl -my-2">{weatherIcon(obj.weather[0].icon)}</div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl">{obj.main.temp}</div>
                    <div className="flex items-center">
                        <WiRaindrop className="text-2xl -mb-1"/> {obj.pop} %
                    </div>
                </div>
            </div>
        </div>
    ))

    const updateButtons = () => {
        const container = containerRef.current;

        if (!container) return;

        if (container.scrollLeft <= 0) {
            setShowLeft("hidden");
        } else {
            setShowLeft("block");
        }

        if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth - 1
        ) {
            setShowRight("hidden");
        } else {
            setShowRight("block");
        }
    };


    return(
        <div className="forecastConatiner flex  p-4">
            <div className=" w-fit relative">
                <div className="flex justify-center border-0 rounded-t-2xl bg-[#070a0e]  items-start">
                    <div className="flex gap-2 h-10 mt-1 text-white">
                        <button className={`border w-25 bg-[#2e3f45] hover:bg-[#2e3f45ad] ${ (selectedDate === dates[0]) ? ("bg-[#191f23] rounded-t-2xl border-b-0") : ("bg-[#2e3f45] rounded-2xl") }`} onClick={()=> setSelectedDate(dates[0])}>Today</button>
                        <button className={`border w-25 bg-[#2e3f45] hover:bg-[#2e3f45ad] ${ (selectedDate === dates[1]) ? ("bg-[#191f23] rounded-t-2xl border-b-0") : ("bg-[#2e3f45] rounded-2xl") } `} onClick={()=> setSelectedDate(dates[1])}>Tommorow</button>
                        <button className={`border w-25 bg-[#2e3f45] hover:bg-[#2e3f45ad] ${ (selectedDate === dates[2]) ? ("bg-[#191f23] rounded-t-2xl border-b-0") : ("bg-[#2e3f45] rounded-2xl") }`} onClick={()=> setSelectedDate(dates[2])}>{days[2]}</button>
                        <button className={`border w-25 bg-[#2e3f45] hover:bg-[#2e3f45ad] ${ (selectedDate === dates[3]) ? ("bg-[#191f23] rounded-t-2xl border-b-0") : ("bg-[#2e3f45] rounded-2xl") }`} onClick={()=> setSelectedDate(dates[3])}>{days[3]}</button>
                        <button className={`border w-25 bg-[#2e3f45] hover:bg-[#2e3f45ad] ${ (selectedDate === dates[4]) ? ("bg-[#191f23] rounded-t-2xl border-b-0") : ("bg-[#2e3f45] rounded-2xl") }`} onClick={()=> setSelectedDate(dates[4])}>{days[4]}</button>
                    </div>
                </div>
                <div className="flex w-230 min-h-50 border border-t-0 rounded-b-2xl items-center overflow-x-hidden snap-x snap-mandatory bg-[#191f23]" onScroll={()=>updateButtons()} ref={containerRef}>
                    {postcards}
                </div>
                <button className={`absolute right-0 bottom-0 rounded-br-2xl h-50 w-8 bg-black/20 flex justify-center items-center ${showRight} `} onClick={scrollRight}><IoIosArrowForward /></button>
                <button className={`absolute left-0 bottom-0 rounded-bl-2xl h-50 w-8 bg-black/20 flex justify-center items-center ${showLeft}`}  onClick={scrollLeft}><IoIosArrowBack /></button>
            </div>
        </div>
    )
}

export default FiveDayForecast