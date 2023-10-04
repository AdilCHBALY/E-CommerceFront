"use client"

import { Billboard } from "@/type"

interface BillboardProps{
    data:Billboard | null
}


const Billboard:React.FC<BillboardProps> = ({data}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div 
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{backgroundImage : `url(${data?.imageUrl})`}}>
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-8">
                <div className="w-full h-full flex justify-center items-center  font-bold text-3xl sm:text-5xl lg:text-6xl bg-neutral-100/25">
                    {data?.label}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Billboard