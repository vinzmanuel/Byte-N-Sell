/* eslint-disable no-empty */
import { Button } from '@/components/ui/button'
import React from 'react'
import { formatDistanceToNow, parse } from "date-fns";
import service from '@/shared/service';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';




function SellerDetails({listingDetails}) {


    const{user}=useUser();

    const navigation=useNavigate()

    const OnMessageSellerButtonClick=async()=>{
        const userId=user.primaryEmailAddress.emailAddress.split('@')[0]
        const sellerUserId=listingDetails?.createdBy.split('@')[0]
    
        // Create current user id 
            try{
                await service.CreateSendBirdUser(userId,user?.fullName,user?.imageUrl)
                .then(resp=>{
                    console.log(resp);
                })
            }catch(e){}
        // Sellers user id
            try{
                
                await service.CreateSendBirdUser(sellerUserId,listingDetails?.userName,listingDetails?.userImageUrl)
                .then(resp=>{
                    console.log(resp);
                })
            }catch(e){}
        // Create Channel
            try{
                await service.CreateSendBirdChannel([userId, sellerUserId],listingDetails?.listingTitle)
                .then(resp=>{
                    console.log(resp);
                    console.log("Channel Created");
                    navigation('/profile');

                })
            }catch(e){}
        
    };

    const formattedDate =
        listingDetails?.dateCreated &&
        formatDistanceToNow(new Date(listingDetails.dateCreated), { addSuffix: true });

    return (
        <div className='p-10 border rounded-xl shadow-md mt-4 ml-4'>
            <h2 className=" text-2xl mb-5">Sold by</h2>
            <div className='flex gap-2'>
                <img src={listingDetails?.userImageUrl} className='w-[100px] h-[100px] rounded-full'/>
                <div>
                    <h2 className='font-bold text-2xl'>{listingDetails?.userName}</h2>
                    <h2 className='font-md text-sm text-gray-500'>{listingDetails?.createdBy}</h2>
                    <h2 className='mt-5 font-md text-sm'>Posted this listing {formattedDate ? formattedDate : "today"}.</h2>
                </div>
                
            </div>
            <Button className='w-full mt-6'
            onClick={OnMessageSellerButtonClick}
            >Message Seller</Button>
        </div>
    )
}

export default SellerDetails