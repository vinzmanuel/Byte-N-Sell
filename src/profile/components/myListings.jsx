/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { db } from './../../../configs'
import { Listing, ListingImages } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '@/shared/service'
import CarItem from '@/components/carItem'
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";



function MyListings() {

    const {user}=useUser();
    const [listingList,setlistingList]=useState([])
    useEffect(()=>{
        user&&GetUserListing();
    },[user])

    const GetUserListing=async()=>{
        const result=await db.select().from(Listing)
        .leftJoin(ListingImages, eq(Listing.id,ListingImages.ListingId))
        .where(eq(Listing.createdBy,user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(Listing.id))

        const resp=service.FormatResult(result)
        console.log(resp);
        setlistingList(resp);
    }

    return (
        <div className="px-48">
            <div className='flex justify-between items-center pt-6'>
                <h2 className='font-bold text-4xl'>My Listings</h2>
                <Link to={'/add-listing'}>
                    <Button className="pl-96font-white">+ Add New Listing</Button>
                </Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-7 gap-5'>
                {listingList.map((item, index) => (
                    <div key={index}>
                        <CarItem car={item} />
                        <div className="p-2 bg-gray-100 rounded-lg flex justify-between gap-1">
                            <Link to={'/add-listing?mode=edit&id='+item?.id} className='w-full text-black'>
                            <Button variant="outline" className='w-full group'> <IoIosSettings className="group-hover:animate-spin transition-all" />
                                Edit</Button>
                            </Link>
                            <Button variant="destructive"><FaTrashAlt /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyListings