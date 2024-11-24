import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({item, handleInputChange,listingInfo}) {
    return (
        <div>
            <Input type={item?.fieldType} 
            name={item?.name} 
            required={item?.required}
            defaultValue={listingInfo?.[item.name]}
            onChange={(e)=>handleInputChange(item.name,e.target.value)}
            />
        </div>
    )
}

export default InputField