import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Dropdown({item, handleInputChange, listingInfo}) {
  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name,value)}
        required={item.required} defaultValue={listingInfo?.[item?.name]}>
                      
        <SelectTrigger className="w-full">
          <SelectValue placeholder={listingInfo?.[item?.name]?listingInfo?.[item?.name]:item.label} />
        </SelectTrigger>
        <SelectContent>
          
          {item.options?.map((option,index)=>(
            <SelectItem key={index} value={option}>{option}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Dropdown