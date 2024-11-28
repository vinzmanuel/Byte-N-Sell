import React, { useEffect, useState } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";

function Animation() {
    const [showTruck, setShowTruck] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTruck(false); // Change to package after 20 seconds
        }, 20000); // 20 seconds

        return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }, []);

    return (
        <div className="pt-48 pb-6 flex flex-col items-center justify-center">
            {showTruck ? (
                <TbTruckDelivery className="animate-bounce" size={50} color="gray" />
            ) : (
                <LuPackageOpen size={50} color="gray" />
            )}
        </div>
    );
}

export default Animation;