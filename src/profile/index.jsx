import Header from '@/components/header'
import Footer from '@/components/footer'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import MyListings from './components/myListings'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Inbox from './components/Inbox'


function Profile() {

        

    return (
        <div>
            <Header/>
            <div className='pt-20 px-36 md:px-20 my-10'>
            <Tabs defaultValue="my-listings" className="w-full px-28">
                <TabsList className="w-full flex justify-start">
                    <TabsTrigger value="my-listings" className="text-gray-600 bg-gray-100  focus:text-white focus:outline-none mr-1">
                        My Listings </TabsTrigger>

                    <TabsTrigger value="inbox" className="text-gray-600 bg-gray-100  focus:text-white focus:outline-none mr-1">
                        Inbox </TabsTrigger>

                    <TabsTrigger value="profile" className="text-gray-600 bg-gray-100  focus:text-white focus:outline-none">
                        Profile </TabsTrigger>
                </TabsList>
                <TabsContent value="my-listings">
                    <MyListings />
                </TabsContent>
                <TabsContent value="inbox">
                    <Inbox/>
                </TabsContent>
                <TabsContent value="profile">Profile Tab</TabsContent>
            </Tabs>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Profile