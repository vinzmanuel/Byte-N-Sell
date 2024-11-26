import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from './../../configs';
import service from '@/shared/service';
import { Listing, ListingImages } from './../../configs/schema';
import { asc, desc, eq } from 'drizzle-orm';
import ListingItem from './carItem';


function Mostsearched() {

    const [listingList,setlistingList]=useState([])
    useEffect(()=>{
        GetPopularCarList();
    },[])

    const GetPopularCarList=async()=>{
        const result=await db.select().from(Listing)
        .leftJoin(ListingImages, eq(Listing.id,ListingImages.ListingId))
        .orderBy(asc(Listing.id))
        .limit(10)

        const resp=service.FormatResult(result)
        setlistingList(resp);
    }

    return (
        <div className='px-64 pt-24 pb-24 bg-white'>
            <h2 className='font-extrabold text-3xl text-center mb-6'>Latest Listings</h2>

            <Carousel>
            <CarouselContent>
                {listingList.slice().reverse().map((listing, index) => (
                <CarouselItem className="basis-1/ mx-[1px]" key={index}>
                    <ListingItem listing={listing} />
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Mostsearched;