import { useState } from "react";



function FiveDayForecast({data}){

    const groupedForecast = datafive.list.reduce((acc, obj)=>{
        const date = obj.dt_txt.split(" ")[0]

        if(!acc[date]){
        acc[date] = []
        }

        acc[date] = [...acc[date], obj] 

        return acc
    }, {})



    return(
        <div>

        </div>
    )
}

export default FiveDayForecast