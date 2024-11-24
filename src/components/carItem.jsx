import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";


function CarItem({ car }) {
    return (
        <div className="w-66 rounded-xl bg-gray-50 hover:bg-slate-100 transition-all cursor-pointer p-4">
                <div className="w-72 h-72 rounded-md overflow-hidden">
                    <img src={car?.images[0].imageUrl} 
                    className="w-full h-full object-cover" />
                </div>
            <div className="p-1 py-3">
                <h2 className="font-bold text-black text-xl mb-1">{car?.listingTitle}</h2>
                <h2 className="font-bold text-black text-2xl mb-1">PHP {car?.sellingPrice}</h2>
                <h2 className="text-sm mb-1">{car?.condition}</h2>
                <div>
                    <div className="flex items-center ">
                        <CiLocationOn className="mb-1" />
                        <h2 
                            className=" text-sm pl-1 max-w-full break-words overflow-hidden text-ellipsis leading-tight"
                            style={{ wordBreak: "break-word", maxWidth: "16rem" }}
                        >
                            {car?.location}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarItem