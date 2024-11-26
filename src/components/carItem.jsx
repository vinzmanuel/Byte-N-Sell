import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

function ListingItem({ listing }) {


    return (
        <Link to={'/listing-details/'+listing?.id}>
            <div className="w-66 rounded-xl bg-gray-50 hover:bg-slate-200 transition-all cursor-pointer p-4">
                    <div className="w-72 h-72 rounded-md overflow-hidden">
                        <img src={listing?.images[0].imageUrl} 
                        className="w-full h-full object-cover" />
                    </div>
                <div className="p-1 py-3">
                    <h2 className="font-bold text-black text-xl mb-1">{listing?.listingTitle}</h2>
                    <h2 className="font-bold text-black text-2xl mb-1">PHP {new Intl.NumberFormat().format(listing?.sellingPrice)}</h2>
                    <h2 className="text-black text-sm mb-1">{listing?.condition}</h2>
                    <div>
                        <div className="text-black flex items-center ">
                            <CiLocationOn className="mb-1" />
                            <h2 
                                className=" text-black text-sm pl-1 max-w-full break-words overflow-hidden text-ellipsis leading-tight"
                                style={{ wordBreak: "break-word", maxWidth: "16rem" }}
                            >
                                {listing?.location}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ListingItem