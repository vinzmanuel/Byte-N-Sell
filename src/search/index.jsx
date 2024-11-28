import Footer from '@/components/footer';
import Header from '@/components/header';
import service from '@/shared/service';
import Search from '@/components/search';
import { db } from '../../configs';
import { Listing, ListingImages } from '../../configs/schema';
import { and, eq, or } from 'drizzle-orm';
import { sql } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import ListingItem from '@/components/carItem';

function SearchByOptions() {

    const[searchParams]=useSearchParams();
    const [listingList,setListingList]=useState([]); 
    const category=searchParams.get('category');
    const brand=searchParams.get('brand');
    const sellingPrice=searchParams.get('sellingPrice');

    useEffect(()=>{
        GetListingsList();
    })

    const GetListingsList = async () => {
        let query = db.select()
        .from(Listing)
        .innerJoin(ListingImages, eq(Listing.id, ListingImages.ListingId));
    
        // Apply conditions based on what's selected
        if (category !== undefined && brand !== undefined) {
            // Both category and brand are selected, apply AND condition
            query = query.where(and(
                eq(Listing.category, category),
                eq(Listing.listingtitle, brand)
            ));
        } else if (category !== undefined) {
            // Only category is selected, apply OR condition for brand
            query = query.where(eq(Listing.category, category));
        } else if (brand !== undefined) {
            // Only brand is selected, apply OR condition for category
            query = query.where(eq(Listing.brand, brand));
        }
    
        // Execute query
        const result = await query;
    
        // Format and set the results
        const resp = service.FormatResult(result);
        console.log(resp);
        setListingList(resp);
    };

    return (
        <div >
            <Header/>
            <div className='py-20 mt-14  bg-gray-200 flex justify-center'>
                <Search/>
            </div>
            <div className='px-64 pb-36'>
                <h2 className='font-bold text-5xl pt-10 '>Search Results</h2>
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

export default SearchByOptions