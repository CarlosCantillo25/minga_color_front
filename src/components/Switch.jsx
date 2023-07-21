import React, {useState} from "react";

const ToggleSwitch = ({onclick, initialState = false}) => {
    const [isOn, setIsOn] = useState(initialState);

    const handleToggle = () => {
        setIsOn(!isOn);
        onclick()
    };
    return (
        <div 
            className={`w-12 h-6 bg-gray-300 ronded-[50%] flex items-center cursor-pointer trsnsition-color ${isOn?'bg-green-500':'bg-red-500'}`} onClick={handleToggle}>
            <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${isOn?'translate-x-6':'translate-x-1'}`}>

            </div>
        </div>
    )
}
export default ToggleSwitch