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
  WiNightAltRain
} from "react-icons/wi";

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


    return(
        <>

        <div className="flex h-[50vh] justify-center items-center p-8 ">
            <div className=" border rounded-3xl h-full w-full">
                <div className="flex justify-between p-2 px-6 text-lg items-center">
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
                <hr className="mx-8"></hr>

                <div className="">
                    <h4>{data.main.temp}</h4>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default WeatherCard 
