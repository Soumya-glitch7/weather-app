import { useEffect, useState } from "react"

function AqiMeter({dataAqi, dataAqiValue}){
    
    if(!dataAqi || !dataAqiValue){
        return 
    }

    
    const aqiValue = dataAqiValue.data.aqi
    const review = (aqiValue <= 50) ? (0): (
        aqiValue <= 100
    ) ? (1) : (
        aqiValue <=150
    ) ? (2) : (
        aqiValue <=200
    ) ? (3) : (
        aqiValue <=250
    ) ? (4) : (
        aqiValue <=300
    ) ? (5) : (6)

    const calculateHowAhead = (checkpoint) =>{
        
        const outOfFifty = aqiValue - checkpoint
        const percentInBucket = (outOfFifty/50)
        
        const howAheadInBucket = percentInBucket*16.67
            
        const percentTillCheckpoint = (checkpoint/300)*100
            
        const howAhead = percentTillCheckpoint + howAheadInBucket
        return howAhead
    }

    const getPointerPosition = () =>{
        if(aqiValue <= 50){

            const percentInBucket = (aqiValue/50)
            
            const howAhead = percentInBucket*16.67 
            return howAhead
        }

        if(aqiValue > 50 && aqiValue <=100){
            const checkpoint = 50
            return calculateHowAhead(checkpoint)
        }
        
        if(aqiValue > 100 && aqiValue <=150){
            const checkpoint = 100
            return calculateHowAhead(checkpoint)
        }
        
        if(aqiValue > 150 && aqiValue <=200){
            const checkpoint = 150
            return calculateHowAhead(checkpoint)
        }
        
        if(aqiValue > 200 && aqiValue <=250){
            const checkpoint = 200
            return calculateHowAhead(checkpoint)
        }
        
        if(aqiValue > 250 && aqiValue <=300){
            const checkpoint = 250
            return calculateHowAhead(checkpoint)
        }

        if(aqiValue >300){
            return (100)
        }
    }

    const aqiThemes = {
        0: {
            label: "Good",
            gradient: "from-[#2E8B57] to-[#6BCB77]",
        },

        1: {
            label: "Moderate",
            gradient: "from-[#D4A017] to-[#FFD166]",
        },

        2: {
            label: "Poor",
            gradient: "from-[#E67E22] to-[#F4A261]",
        },

        3: {
            label: "Unhealthy",
            gradient: "from-[#C0392B] to-[#E74C3C]",
        },

        4: {
            label: "Severe",
            gradient: "from-[#7B2CBF] to-[#9D4EDD]",
        },

        5: {
            label: "Hazardous",
            gradient: "from-[#5C0011] to-[#8B0000]",
        },

        6: {
            label: "Critical",
            gradient: "from-[#2B0000] to-[#5C0011]"
        },

        7: {
            label: "N/A",
            gradient: "from-gray-400 to-gray-500"
        }
    };



    return(
        <>
            <div className="container p-4 text-white">
                
                <div className={`border rounded-2xl h-61 p-8 px-16 bg-linear-to-r ${aqiThemes[review].gradient} relative overflow-hidden`} >
                    <div >
                        <img className="absolute opacity-15 top-16 left-40 animate-[drift_90s_linear_infinite]" src="/cloud1.png"/>
                        <img className="absolute opacity-15 top-15 right-40 animate-[drift_70s_linear_infinite]" src="/cloud2.png"/>
                        <img className="absolute opacity-15 top-0 right-0 animate-[drift_110s_linear_infinite]" src="/cloud3.png"/>
                    </div>
                    <div className="flex">
                        <div className="text-8xl flex items-baseline">
                            {aqiValue ?? "N/A"}
                            <div className="text-lg text-gray-200">AQI(US)</div>
                        </div>
                        <div className="flex flex-col ml-auto mt-4 items-center">
                            <div>Air Quality is:</div>
                            <div className="border rounded-lg px-15 flex text-2xl flex-1 justify-center items-center">{aqiThemes[review].label}</div>
                        </div>
                    </div>
                    <div className="flex text-xl mt-1">
                        <div><span className="text-gray-200" >PM2.5: </span> {dataAqi.list[0].components.pm2_5}</div>
                        <div className="ml-auto"><span className="text-gray-200">PM10: </span> {dataAqi.list[0].components.pm10}</div>
                    </div>
                    
                    <div className=" flex flex-col py-6 z-0">
                        <div className="flex text-sm">
                            <div className="flex-1 flex justify-center">Good</div>
                            <div className="flex-1 flex justify-center">Moderate</div>
                            <div className="flex-1 flex justify-center">Poor</div>
                            <div className="flex-1 flex justify-center">Unhealthy</div>
                            <div className="flex-1 flex justify-center">Severe</div>
                            <div className="flex-1 flex justify-center">Hazardous</div>
                        </div>
                        <div className="flex h-1 relative">
                            <div className="bg-[#4FBA1B] flex-1"></div>
                            <div className="bg-[#F0CA2A] flex-1"></div>
                            <div className="bg-[#ED852B] flex-1"></div>
                            <div className="bg-[#E9426D] flex-1"></div>
                            <div className="bg-[#A734B8] flex-1"></div>
                            <div className="bg-[#C81332] flex-1"></div>
                            <div className={`rounded-4xl bg-white  h-2 w-2 absolute shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] z-10 -top-0.5`}
                                style={{
                                    left : `${getPointerPosition()}%`
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