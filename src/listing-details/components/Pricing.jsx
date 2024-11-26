import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";



function Pricing({ listingDetails }) {
    return (
        <div className="p-10 rounded-xl border shadow-md ml-4">
            <h2>Sold at</h2>
            <h2 className="font-bold text-black text-4xl mb-4">
            PHP {new Intl.NumberFormat().format(listingDetails?.sellingPrice)}</h2>
            <div className="flex flex-col">
                <Button><TiShoppingCart /> Buy Now</Button>
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-2 text-gray-500">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                <Button><MdOutlineLocalOffer /> Make an offer price</Button>
            </div>
        </div>
    );
}


export default Pricing