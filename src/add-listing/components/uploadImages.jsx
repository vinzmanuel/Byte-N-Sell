/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { ListingImages } from './../../../configs/schema';
import { db } from './../../../configs';
import { eq } from 'drizzle-orm';


function UploadImages({triggleUploadImages, setLoader, listingInfo, mode}) {

    const [selectedFileList, setSelectedFileList]=useState([]);
    const [EditCarImageList, setEditCarImageList]=useState([]);

    useEffect(()=>{
        if (mode=='edit')
        {
            setEditCarImageList([]);
            listingInfo?.images.forEach((image) => {
                setEditCarImageList(prev=>[...prev,image?.imageUrl]);
            })
        }
    },[listingInfo])

    useEffect(()=>{
        if(triggleUploadImages)
        {
            UploadImagesToServer(); 
        }
    },[triggleUploadImages])

    const onFileSelected=(event)=>{ 
        const files=event.target.files;
        console.log(files);

        for(let i=0; i<files?.length;i++)
        {
            const file=files[i];
            setSelectedFileList((prev)=>[...prev,file])
        }
    }

    const onImageRemove=(image,index)=>{
        const result=selectedFileList.filter((item)=>item!=image);
        setSelectedFileList(result);
    }
    const onImageRemoveFromDB=async(image,index)=>{
        const result=await db.delete(ListingImages).where(eq(ListingImages.id,listingInfo.images[index].id)).returning({id:ListingImages.id});

        const imageList=EditCarImageList.filter(item=>item!=image);
        setEditCarImageList(imageList);
    }

    const UploadImagesToServer=async()=>{
        setLoader(true);
        await selectedFileList.forEach(async(file)=>{
            const fileName=Date.now()+'.jpeg';
            const storageRef=ref(storage, 'Byte-N-Sell/'+fileName);
            const metaData={
                contentType: 'image/jpeg'
            }
            await uploadBytes(storageRef, file, metaData). then((snapShot)=>{
                console.log('Uploaded File');
            }).then(resp=>{
                getDownloadURL(storageRef).then(async(downloadUrl)=>{
                    console.log(downloadUrl);
                    await db.insert(ListingImages).values({
                        imageUrl:downloadUrl,
                        ListingId:triggleUploadImages
                    })
                })
            })
            setLoader(false);
        })
    }

    return (
        <div>
            <h2 className='font-bold text-2xl mb-6'>Upload Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 '>
                {mode=='edit'&&
                    EditCarImageList.map((image,index)=>(
                        <div key={index}>
                            <IoMdCloseCircle className='absolute m-2 text-2xl text-white hover:text-red-500 transition-colors duration-200' 
                            onClick={()=> onImageRemoveFromDB(image, index)} 
                            /> 
                            <img src={image} className='w-64 h-64 object-cover rounded-md border-2 border-gray-100'/>
                        </div>
                    ))
                }
                {selectedFileList.map((image,index)=>(
                    <div key={index}>
                        <IoMdCloseCircle className='absolute m-2 text-2xl  text-white hover:text-red-500 transition-colors duration-200' 
                            onClick={()=> onImageRemove(image, index)} 
                        /> 
    
                        <img src={URL.createObjectURL(image)} className='w-64 h-64 object-cover rounded-md border-2 border-gray-100'/>
                    </div>
                ))}
                <label htmlFor='upload-images'>
                    <div className=' w-64 h-64 border rounded-xl border-dotted 
                    border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                        <h2 className='text-4xl text-center text-primary pt-16'>+</h2>
                    </div>
                </label>
                <input type="file" multiple={true} id='upload-images'
                onChange={onFileSelected} 
                className='opacity-0'/>
            </div>
        </div>
    )
}

export default UploadImages