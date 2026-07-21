import { useEffect, useState } from "react"

function AqiMeter({dataAqi, dataAqiValue}){
    
    if(!dataAqi || !dataAqiValue){
        return
    }
    
    const aqiReviews = ["Good", "Fair", "Moderate", "Poor", "Very Poor"] 

    const aqiValue = dataAqiValue.data.aqi

    const aqiPercentage = ((aqiValue / 500) * 100)




    return(
        <>
            <div className="container p-4">
                <div className="border rounded-2xl h-61 p-8 px-16">
                    <div className="flex">
                        <div className="text-8xl flex items-baseline">
                            {aqiValue || "N/A"}
                            <div className="text-lg">AQI(US)</div>
                        </div>
                        <div className="flex flex-col ml-auto mt-4 items-center">
                            <div>Air Quality is:</div>
                            <div className="border rounded-lg px-15 flex text-2xl  flex-1 justify-center items-center">{aqiReviews[dataAqi.list[0].main.aqi - 1]}</div>
                        </div>
                    </div>
                    <div className="flex text-xl mt-1">
                        <div><span >PM2.5:</span> {dataAqi.list[0].components.pm2_5}</div>
                        <div className="ml-auto"><span>PM10:</span> {dataAqi.list[0].components.pm10}</div>
                    </div>
                    
                    <div className=" flex flex-col py-6 z-0">
                        <div className="flex h-1 relative">
                            <div className="bg-[#4FBA1B] flex-1"></div>
                            <div className="bg-[#F0CA2A] flex-1"></div>
                            <div className="bg-[#ED852B] flex-1"></div>
                            <div className="bg-[#E9426D] flex-1"></div>
                            <div className="bg-[#A734B8] flex-1"></div>
                            <div className="bg-[#C81332] flex-1"></div>
                            <div className={`rounded-4xl bg-gray-300  h-2 w-2 absolute shadow-[0_0_10px_6px_rgba(0,0,0,0.5)] z-10 -top-0.5`}
                                style={{
                                    left : `${aqiPercentage}%`
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AqiMeter