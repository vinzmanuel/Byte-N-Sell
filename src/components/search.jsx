import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from './ui/separator'
import { CiSearch } from "react-icons/ci";
import data from '@/shared/data';

function Search() {

    

    return (
        <div className='p-2 md:p-5 bg-white rounded-md 
        md:rounded-full flex-col md:flex md:flex-row  gap-10 px-5 items-center 
        w-[60%]'>
            <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Parts" />
            </SelectTrigger>
            <SelectContent>
            {Array.isArray(data.Part) && data.Part.map((maker, index) => (
                    <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>

            <Separator orientation="vertical" className='hidden md:block'/>
            
            <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Manufacturer" />
            </SelectTrigger>
            <SelectContent>
                {Array.isArray(data.Manufacturers) && data.Manufacturers.map((maker, index) => (
                    <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>

            <Separator orientation="vertical" className='hidden md:block'/>

            <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
            {Array.isArray(data.Pricing) && data.Pricing.map((maker, index) => (
                    <SelectItem key={index} value={maker.amount}>{maker.amount}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            <div>
                <CiSearch className='text-[50px] bg-primary 
                rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer'/>
            </div>
        </div>
    )
}

export default Search