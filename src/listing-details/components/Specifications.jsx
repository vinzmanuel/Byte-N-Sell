import IconField from '@/add-listing/components/iconField'
import ListingSpecifications from '@/shared/ListingSpecifications'
import React from 'react'

function Specifications({ listingDetails }) {
    return (
        
        <div className="px-10 pb-10 pt-5 rounded-xl border shadow-md ml-4 mt-4">
            <h2 className=" text-2xl">Details</h2>
            {listingDetails?ListingSpecifications?.map((item, index) => (
                <div className="mt-5 flex items-center justify-between" key={index}>
                    <h2 className="flex gap-2"><IconField icon={item?.icon} />{item?.label}</h2>
                    <h2>
                        {item?.name === "originalPrice"? 
                        `PHP ${new Intl.NumberFormat().format(listingDetails[item?.name])}`
                        : listingDetails?.[item?.name]}
                    </h2>
                </div>
            ))
            :
            <div className="w-full h-[500px] rounded-xl bg-slate-200 animate-pulse">
            </div>
            }
        
        </div>
    );
}

export default Specifications