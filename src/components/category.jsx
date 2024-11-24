import data from '@/shared/data'
import React from 'react'

function Category() {
    return (
        <div className='px-64 pt-72 bg-white'>
            <h2 className='font-extrabold text-3xl text-center mb-6'> Browse By Type</h2>

            <div className='pt-5 pb-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-6'>
                {data.Category.map((category) => (
                    <div key={category.id} className='border rounded-xl p-3 
                    flex flex-col items-center justify-center hover:shadow-lg cursor-pointer'> 
                        <img src={category.icon} width={55} height={55} alt={category.name} />
                        <h2 className='pt-2'>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category