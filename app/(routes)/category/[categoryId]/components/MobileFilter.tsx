"use client"

import Button from "@/components/ui/Button"
import { Color, Size } from "@/type"
import { useState } from "react"
import {SlidersHorizontal,X } from 'lucide-react'
import {Dialog} from '@headlessui/react'
import IconButton from "@/components/ui/IconButton"
import Filter from "./Filter"


interface MobileFilterProps{
    colors:Color[]
    sizes:Size[]
}


const MobileFilter:React.FC<MobileFilterProps> = ({
    colors,
    sizes
}) => {
    const [open,setOpen]=useState(false)

    const onOpen=()=>setOpen(true)
    const onClose=()=>setOpen(false)


    return (
        <>
            <Button 
            onClick={onOpen}
            className="flex items-center gap-x-2 lg:hidden bg-white text-black border border-black">
                Filters
                <SlidersHorizontal  size={20}/>
            </Button>
            <Dialog open={open} as="div" onClose={onClose} className="relative z-40 lg:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X  size={15} onClick={onClose}/>} />
                        </div>
                        <div className="p-4">
                            <Filter 
                                isColor={false}
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />  
                            <Filter 
                                isColor={true}
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />  
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilter