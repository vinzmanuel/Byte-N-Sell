/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { db } from './../../../configs'
import { Listing, ListingImages } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import service from '@/shared/service'
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ListingItem from '@/components/carItem'



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

    const handleDeleteListing = async (listingId) => {
        try {
            await deleteListingImages(listingId);
            await db.delete(Listing).where(eq(Listing.id, listingId));
            console.log("Listing deleted successfully!");
        } catch (error) {
            console.error("Error deleting listing:", error);
        }
    };

    const deleteListingImages = async (listingId) => {
        try {
            await db
            .delete(ListingImages)
            .where(eq(ListingImages.ListingId, listingId));
        } catch (error) {
            console.error("Error deleting listing images:", error);

        }
    };

    return (
        <div className="px-20">
            <div className='flex justify-between items-center pt-6'>
                <h2 className='font-bold text-4xl'>My Listings</h2>
                <Link to={'/add-listing'}>
                    <Button className="pl-96font-white">+ Add New Listing</Button>
                </Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-7 gap-5'>
                {listingList.map((item, index) => (
                    <div key={index}>
                        <ListingItem listing={item} />
                        <div className="p-2 bg-gray-100 rounded-lg flex justify-between gap-1">
                            <Link to={'/add-listing?mode=edit&id='+item?.id} className='w-full text-black'>
                            <Button variant="outline" className='w-full group'> <IoIosSettings className="group-hover:animate-spin transition-all" />
                                Edit</Button>
                            </Link>
                            <AlertDialog className='bg-slate-500'>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive"><FaTrashAlt /></Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete the listing.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className='bg-red-700 hover:bg-red-900'onClick={() => handleDeleteListing(item.id)}>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyListings