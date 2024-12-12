import React from 'react'

function Stuff() {
    return (
        <div className='px-96 pb-24 pt-2 bg-white'>
            
            <h2 className=" pb-16 font-extrabold text-3xl text-center mb-8">Sell and buy PC parts and tech on Byte-N-Sell</h2>

            <div className="flex justify-evenly items-stretch gap-6 md:gap-12">
            <div className="flex flex-col items-center text-center w-64 h-full">
                <img src="https://static.karousell.com/web/homescreen/sell_buy_1.svg"  className="w-36 mb-4" />
                <h3 className="text-lg font-semibold">1 in 20 Filipinos use Byte-N-Sell</h3>
            </div>
            <div className="flex flex-col items-center text-center w-64 h-full">
                <img src="https://static.karousell.com/web/homescreen/sell_buy_2.svg" className="w-36 mb-4" />
                <h3 className="text-lg font-semibold">Sell your unused items in 30 seconds and earn extra cash</h3>
            </div>
            <div className="flex flex-col items-center text-center w-64 h-full">
                <img src="https://static.karousell.com/web/homescreen/sell_buy_3.svg" className="w-36 mb-4" />
                <h3 className="text-lg font-semibold">Buy your tech needs606 in good condition for a fraction of the cost</h3>
            </div>
            </div>
            
            
            <h2 className=" pt-36 pb-16 font-extrabold text-3xl text-center mb-6">Transact with a trusted local community</h2>

            <div className="flex justify-between gap-6">
                <div className="flex flex-col   w-64">
                    <img src="/rating.png" className="w-28 mb-2" />
                    <h2 className='text-lg mb-2'>Very easy to transact with.</h2>
                    <h3 className='mb-1'>Very easy to transact with. Super Agent! Unit was exactly as advertised. Very professional and reliable!</h3>
                    <h3 className='text-gray-800'>@yunyunvalenzuela</h3>
                </div>
                <div className="flex flex-col   w-64">
                    <img src="/rating.png" className="w-28 mb-2" />
                    <h2 className='text-lg mb-2'>Highly recommended seller</h2>
                    <h3 className='mb-1'>Highly Recommended Seller! Trustworthy and very easy to deal with! Excellent service! No complains here this is our second time to buy a unit with...</h3>
                    <h3 className='text-gray-800'>@vinzmanuel</h3>
                </div>
                <div className="flex flex-col  w-64">
                    <img src="/rating.png" className="w-28 mb-2" />
                    <h2 className='text-lg mb-2'>Friendliest seller on Byte-N...</h2>
                    <h3 className='mb-1'>Pinakamabait na nakilala ko dto sa Byte-N-Sell! Instead of paying for her item she gave it to me for me yay bcos Bday nya napakabait! God bless You ate...</h3>
                    <h3 className='text-gray-800'>@lil_ryce</h3>
                </div>
                <div className="flex flex-col  w-64">
                    <img src="/rating.png" className="w-28 mb-2" />
                    <h2 className='text-lg mb-2'>Loved the buying experience</h2>
                    <h3 className='mb-1'>This would be the second time Id use Buy-N-Sell to buy online and the experience is amazing. I love that its so easy and pleasant to interact with the</h3>
                    <h3 className='text-gray-800'>@ye</h3>
                </div>
            </div>
            
            
        </div>
    )
}

export default Stuff