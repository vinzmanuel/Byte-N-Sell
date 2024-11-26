import React from 'react'
import { FaPeopleArrows } from "react-icons/fa6";
import { BsExclamationSquare } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Separator } from '@/components/ui/separator';



function DetailHeader({listingDetails}) {
    return (
        <div >
            {listingDetails?.listingTitle 
            ? 
                <div className="flex flex-col gap-2 mt-10">
                    <h2 className="text-2xl">{listingDetails?.listingTitle}</h2>
                    
                    <h1 className="font-bold text-4xl">PHP {new Intl.NumberFormat().format(listingDetails?.sellingPrice)}</h1>
                    <div className="flex gap-56 my-2">
                        <div className='flex gap-2 items-center'>
                            <BsExclamationSquare className="h-6 w-6 text-gray-600 "/>
                            <h2>{listingDetails?.condition}</h2>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaPeopleArrows className="h-6 w-6 text-gray-600 "/>
                            <h2>{listingDetails?.method}</h2>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaLocationDot className="h-6 w-6 text-gray-600 "/>
                            <h2>{listingDetails?.location}</h2>
                        </div>
                    </div> 
                    <Separator/>
                </div>
            :
                <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse">

                </div>}

        </div>
    )
}

export default DetailHeader