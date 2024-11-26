import React from 'react'

function Description({listingDetails}) {
    return (

        <div>
            {listingDetails?.listingDescription?
            <div className='mt-4 p-10 rounded-xl bg-white shadow-md border'>
                <h2 className='mb-2 text-2xl'>Description </h2>
                <p>{listingDetails.listingDescription}</p>
            </div>:
            <div className='w-full h-[100px] mt-7 bg-slate-200 animate-pulse rounded-xl'> 

            </div>}

        </div>
    )
}

export default Description