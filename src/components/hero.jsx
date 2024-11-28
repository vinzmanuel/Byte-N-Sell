import React from 'react'
import Search from './search'

function Hero() {
    return (
        <div>
            <div className='pt-32 flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#eef0fc]'>
                <h2 className='text-lg'>Find PC part and tech for sale near you!</h2>
                <h2 className='text-[60px] font-bold'>Find your dream parts</h2>
                
                <Search/>
                

                <img src='/src/assets/gpu2.png' className='mt-10 w-[1200px] translate-y-[-20px]'  />
            </div>
        </div>
    )
}

export default Hero