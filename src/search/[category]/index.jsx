
import Footer from '@/components/footer'
import Header from '@/components/header'
import service from '@/shared/service'
import Search from '@/components/search'
import { Listing, ListingImages } from '../../../configs/schema'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../configs'
import { eq } from 'drizzle-orm'
import ListingItem from '@/components/carItem'

function SearchByCategory() {

    const {category}=useParams();
    const [listingList, setListingList]=useState([]);

    useEffect(()=>{
        GetListingList();
    },[])
    
    const GetListingList=async()=>{
        const result=await db.select().from(Listing)
        .innerJoin(ListingImages,eq(Listing.id, ListingImages.ListingId))
        .where(eq(Listing.category,category))

        const resp=service.FormatResult(result);
        console.log(resp);
        setListingList(resp);
    }

    return (
        <div >
            <Header/>
            <div className='py-20 mt-14  bg-gray-200 flex justify-center'>
                <Search/>
            </div>
            <div className='px-64 pb-36'>
                <h2 className='font-bold text-5xl pt-10 '>{category}</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-7 gap-5'>
                {
                    listingList?.length>0?(listingList.map((item, index) => (
                        <div key={index}>
                            <ListingItem listing={item} />
                        </div>
                    ))
                    ): 
                    (
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div
                            key={index} // Add key for placeholders
                            className="h-96 rounded-xl bg-slate-200 animate-pulse"
                        />
                    ))
                    )
                }
                </div>
            </div>
            
            <Footer />

        </div>
    )
}

export default SearchByCategory
