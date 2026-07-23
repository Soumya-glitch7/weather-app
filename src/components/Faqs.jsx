import {
    FaWalking,
    FaBicycle,
    FaUmbrella,
    FaTshirt,
    FaCarSide,
    FaWind,
    FaEye,
    FaTemperatureHigh
} from "react-icons/fa";

import { FaLungs } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import {
    MdDirectionsRun,
    MdWarningAmber,
    MdNaturePeople
} from "react-icons/md";

import {
    WiDaySunny,
    WiRain,
    WiHumidity
} from "react-icons/wi";

import { GiSunbeams } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";


function Faqs(){
    return(
        <div className="flex flex-col h-fit bg-white/50 gap-2 my-5 mt-10 text-xl px-10 p-6 rounded-lg ">
            <div className="text-5xl p-4">Frequently Asked Questions</div>
            <div className= "flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaWalking />
                <p className = "ml-2">Is it good for a walk?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className="flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <MdDirectionsRun />
                <p className = "ml-2">Is it suitable for running?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className= "flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaBicycle />
                <p className = "ml-2">Can I go cycling?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </ div>

            <div className="flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaUmbrella />
                <p className = "ml-2">Should I carry an umbrella?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className= "flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaTshirt />
                <p className = "ml-2">What should I wear?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className="flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaLungs />
                <p className = "ml-2">Is the air safe to breathe?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className="flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <GiSunbeams />
                <p className = "ml-2">Do I need sunscreen?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className= "flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaCarSide />
                <p className = "ml-2">Is it good for driving?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className= "flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <FaCamera />
                <p className = "ml-2">Good weather for photography?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>

            <div className="flex items-center border p-2 rounded-lg shadow-[0_0_10px_2px_rgba(0,0,0,0.5)] shadow-gray-600">
                <GiPlantRoots />
                <p className = "ml-2">Good day for gardening?</p>
                <RiArrowDropDownLine className="ml-auto text-3xl"/>
            </div>
        </div>
    )
}

export default Faqs