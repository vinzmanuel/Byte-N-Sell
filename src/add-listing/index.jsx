/* eslint-disable react-hooks/exhaustive-deps */
import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import details from './../shared/details.json'
import InputField from './components/inputField'
import Dropdown from './components/dropdownField'
import TextArea  from './components/textArea'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { Listing, ListingImages } from './../../configs/schema'
import IconField from './components/iconField'
import { FaFileAlt } from "react-icons/fa";
import UploadImages from './components/uploadImages'
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment/moment'
import { toast } from "sonner"
import { eq } from 'drizzle-orm'
import service from '@/shared/service'

function AddListing() {

    const [formData, setFormData]=useState([]);
    const [triggerUploadImages,setTriggerUploadImages]=useState();
    const [searchParams]=useSearchParams();
    const [loader,setLoader]=useState(false);
    const [listingInfo,setListingInfo]=useState();
    const navigate=useNavigate();
    const {user}=useUser();

    const mode=searchParams.get('mode');
    const recordId=searchParams.get('id');
    
    useEffect(()=>{
        if(mode =='edit')
        {
            GetListingDetail();  
        }
    },[])

    const GetListingDetail=async()=>{
        const result=await db.select().from(Listing)
        .innerJoin(ListingImages,eq(Listing.id, ListingImages.ListingId))
        .where(eq(Listing.id,recordId));

        const resp=service.FormatResult(result)
        setListingInfo(resp[0])
        setFormData(resp[0]);

    }

    const handleInputChange=(name, value)=>{
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))

        console.log(formData);
    }

    const onSubmit=async(e)=> {
        setLoader(true);
        e.preventDefault();
        toast("Uploading Listing...", {
            action: {
                label: "Close",
                onClick: () => console.log("Undo"),
            },
        });
        const requiredFields = details.details.filter((item) => item.required);
        const missingFields = requiredFields.filter(
            (item) => !formData[item.name] || formData[item.name].trim() === ""
        );
    
        if (missingFields.length > 0) {
            alert("Please fill all required fields.");
            return;
        }
        console.log("Form Data:", formData);

        if(mode=='edit')
        {
            const result = await db.update(Listing).set({
                ...formData,
                createdBy:user?.primaryEmailAddress?.emailAddress,
                dateCreated: moment().format('MM/DD/YYYY')
            }).where(eq(Listing.id,recordId)).returning({id:Listing.id});
            console.log(result);
        }
        else{
            try{
                const result=await db.insert(Listing).values({
                    ...formData,
                    createdBy:user?.primaryEmailAddress?.emailAddress,
                    dateCreated: moment().format('MM/DD/YYYY')
                },
            ).returning({id:Listing.id});
                if(result)
                {   
                    alert("Listing successfully created!")
                    toast("Listing successfully created!", {
                        description: `Created on ${moment().format("dddd, MMMM DD, YYYY at h:mm A")}`,
                        action: {
                            label: "Close",
                            onClick: () => console.log("Undo"),
                        },
                    });
                    console.log("Listing successfully created!");
                    setTriggerUploadImages(result[0]?.id);
                    setLoader(false);
                }
            }catch(e){
                console.log("Error", e)
            }
        }
    };

    return (
        <div> 
            <Header/>
            <div className='px-10 md:px-64 my-10 h-auto bg-white'>
                <h2 className='font-bold text-4xl'>Add New Listing</h2>
                <form className='p-10 border rounded-xl mt-10'>
                    {/*Details*/}
                    <UploadImages triggleUploadImages={triggerUploadImages}
                    setLoader={(v)=>{setLoader(v);navigate('/refresh')}}/>
                    <Separator className="my-6"/>
                    <div>
                        <h2 className='font-bold text-2xl mb-6'>Details</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            {details.details.map((item, index) => (
                                <div key={index}>
                                {item.name !== "listingDescription" && (
                                    <label className=' flex gap-2 items-center mb-2'>
                                        <IconField icon={item?.icon} />
                                        {item?.label}{item.required && <span className="text-red-500">*</span>}
                                    </label>
                                )}
                                {item.fieldType === 'text' ? (
                                    <InputField item={item} handleInputChange={handleInputChange} listingInfo={listingInfo}/>
                                ) : item.fieldType === 'number' ? (
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">PHP</span>
                                        <input
                                            type="number"
                                            onChange={(e) => handleInputChange(item.name, e.target.value)}
                                            defaultValue={listingInfo?.[item.name]}
                                            className="w-full pl-14 py-2 border rounded-md"
                                            placeholder="Enter amount"
                                        />
                                    </div>
                                ) : item.fieldType === 'dropdown' ? (
                                    <Dropdown item={item} handleInputChange={handleInputChange} listingInfo={listingInfo}/>
                                ) : null}
                            </div>
                            
                            ))}
                        </div>
                        <div className="flex justify-center mb-6">
                            <div className="w-full max-w-2xl">
                                <label className="flex gap-2 items-center mb-2">
                                    <FaFileAlt className="text-primary bg-blue-100 p-1.5 rounded-full" size={30}/>
                                    Listing Description                                        

                                    {details.details.find((item) => item.name === "listingDescription")?.required && (
                                        <span className="text-red-500"> *</span>
                                    )}
                                </label>
                                <TextArea
                                    item={details.details.find((item) => item.name === "listingDescription")}
                                    handleInputChange={handleInputChange}
                                    listingInfo={listingInfo}
                                />
                            </div>
                        </div>
                    </div>
                    <Separator className="my-6"/>
                    <div className='mt-10 flex justify-end'>
                        <Button type="submit" disabled={loader} onClick={(e)=>onSubmit(e)}>
                            {!loader?'Create Listing':<BiLoaderAlt className='animate-spin text-3xl'/>}
                        </Button>
                    </div>
                </form>
                
            </div>

            <Footer/>
        </div>
    )
}

export default AddListing