import fakedata from '@/shared/fakedata';
import React, { useEffect, useState } from 'react';
import CarItem from './carItem'; 
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
import { desc, eq } from 'drizzle-orm';


function Mostsearched() {

    const [listingList,setlistingList]=useState([])
    useEffect(()=>{
        GetPopularCarList();
    },[])

    const GetPopularCarList=async()=>{
        const result=await db.select().from(Listing)
        .leftJoin(ListingImages, eq(Listing.id,ListingImages.ListingId))
        .orderBy(desc(Listing.id))
        .limit(10)

        const resp=service.FormatResult(result)
        console.log(resp);
        setlistingList(resp);
    }

    return (
        <div className='px-64 pt-24 bg-white'>
            <h2 className='font-extrabold text-3xl text-center mb-6'>Latest Listings</h2>

            <Carousel>
                <CarouselContent>
                    {listingList.map((car, index) => {  
                        return (
                            <CarouselItem className="basis-1/ mx-[1px]" key={index}>  
                                <CarItem car={car} /> 
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Mostsearched;