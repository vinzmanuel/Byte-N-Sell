import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextArea({ item, handleInputChange,listingInfo }) {
    return (
        <div>
            <Textarea
                required={item.required}
                defaultValue={listingInfo?.[item?.name]}
                onChange={(e) => handleInputChange(item.name, e.target.value)}
                className="w-full min-h-[200px] p-2 border rounded-md"
                placeholder={item.label}
            />
        </div>
    )
}

export default TextArea