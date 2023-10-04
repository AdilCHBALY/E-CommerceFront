"use client"

import qs from 'query-string'
import { Color, Size } from "@/type"
import { useRouter, useSearchParams } from "next/navigation"
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface FilterProps{
    data:(Size | Color)[]
    name:string
    valueKey:string
    isColor : boolean
}


const Filter:React.FC<FilterProps> = ({
    data,
    name,
    valueKey,
    isColor
}) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedValue = searchParams.get(valueKey)

    const onClick=(id:string)=>{
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: id
        };
    
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }
    
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });
    
        router.push(url)
    }

    return (
        <div className='mb-8'>
            <h3 className='text-lg font-semibold'>
                {name}
            </h3>
            <hr className='my-4' />
            <div className='flex flex-wrap gap-2'>
                {data.map((filter)=>(
                    <div key={filter.id} className='flex items-center'>
                        <Button 
                        onClick={()=>onClick(filter.id)}
                        className={cn(`rounded-md flex justify-center gap-x-2 text-sm text-gray-900 p-2 border border-gray-300 bg-white`,
                        selectedValue === filter.id && "bg-black text-white"
                        )}>
                            {isColor && (
                                <div style={{backgroundColor : filter.value}} className='border rounded-full h-6 w-6' />
                            )}
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter