import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { ListingImages } from './../../../configs/schema';
import { db } from './../../../configs';

function UploadImages({triggleUploadImages, setLoader}) {

    const[selectedFileList,setSelectedFileList]=useState([]);
    
    useEffect(()=>{
        if(triggleUploadImages)
        {
            UploadImagesToServer(); 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {selectedFileList.map((image,index)=>(
                    <div key={index}>
                        <IoMdCloseCircle className='absolute m-2 text-lg text-white hover:text-red-500 transition-colors duration-200' 
                            onClick={()=> onImageRemove(image, index)} 
                        /> 
    
                        <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-md'/>
                    </div>
                ))}
                <label htmlFor='upload-images'>
                    <div className=' h-[130px] border rounded-xl border-dotted 
                    border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                        <h2 className='text-lg text-center text-primary '>+</h2>
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