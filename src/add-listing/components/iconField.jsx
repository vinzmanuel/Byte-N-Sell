import { FaClipboardList } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa"; 
import { FaTags } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

import React from "react";

const iconMap = {
    FaClipboardList: <FaClipboardList />,
    FaComputer: <FaComputer />,
    FaMoneyCheckAlt: <FaMoneyCheckAlt />,
    FaMoneyBillAlt: <FaMoneyBillAlt />,
    FaTags: <FaTags />,
    FaCheckCircle: <FaCheckCircle />,
    FaCalendar: <FaCalendar />,
    FaExclamationCircle: <FaExclamationCircle />,
    FaPeopleArrows: <FaPeopleArrows />,
    FaLocationDot: <FaLocationDot />,
    FaFileAlt: <FaFileAlt />,
};


function IconField({ icon }) {
        
        return (
            <div className='text-primary bg-blue-100 p-1.5 rounded-full'>{iconMap[icon]}</div>
        );
}
    


export default IconField;