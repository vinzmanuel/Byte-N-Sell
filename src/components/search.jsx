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
import { Link } from 'react-router-dom';
import { Input } from './ui/input';

function Search() {

    const [category,setCategory]=useState();
    const [brand,setBrand]=useState();
    const [sellingPrice,setPrice]=useState();

    return (
        <div className='p-2 md:p-5 bg-white rounded-md 
        md:rounded-full flex-col md:flex md:flex-row  gap-10 px-5 items-center 
        w-[60%]'>
            <Select onValueChange={(value)=>setCategory(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Parts" />
            </SelectTrigger>
            <SelectContent>
            {Array.isArray(data.Part) && data.Part.map((parts, index) => (
                    <SelectItem key={index} value={parts.name}>{parts.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>

            <Separator orientation="vertical" className='hidden md:block'/>
            

            <Input onChange={(e) => setBrand(e.target.value)} type="text" placeholder="Brand/Manufacturer" 
            className="placeholder:text-lg text-lg"/>

            <Separator orientation="vertical" className='hidden md:block'/>

            <Select className="focus:border-white outline-none"onValueChange={(value)=>setPrice(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
                {Array.isArray(data.Pricing) && data.Pricing.map((price, index) => (
                    <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
                ))}
            </SelectContent>
            </Select>
            <Link to={'/search?category='+category+"&brand="+brand+"&sellingPrice="+sellingPrice}>
                <CiSearch className='text-[50px] bg-primary 
                rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer'/>
            </Link>
        </div>
    )
}

export default Search