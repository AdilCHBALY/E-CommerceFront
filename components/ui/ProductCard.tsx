"use client"

import { Product } from "@/type"
import Image from "next/image"
import IconButton from "./IconButton"
import {Expand,ShoppingCart} from 'lucide-react'
import Currency from "./Currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/useModal"
import useCart from "@/hooks/useCart"

interface ProductCardProps{
    data:Product
}

const ProductCard :React.FC<ProductCardProps>= ({data}) => {
    const previewModal = usePreviewModal()
    const cart = useCart()
    const router=useRouter()
    const handleClick=()=>{
        router.push(`/product/${data?.id}`)
    }

    const onPreview:MouseEventHandler<HTMLButtonElement>=(e)=>{
        e.stopPropagation()
        previewModal.onOpen(data)
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement>=(e)=>{
        e.stopPropagation()
        cart.addItem(data)
    }

    return (
        <div 
        onClick={handleClick}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    fill
                    src={data.images[0].url}
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 translate-y-[20%] group-hover:translate-y-[0%] group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon = {<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon = {<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg hover:underline">
                    {data.name} - {data.size.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category.name}
                </p>
            </div>
            <div className="flex items-center justify-between">
                <Currency 
                    value={data?.price}
                />
            </div>
            <div className="flex justify-between items-center">
                <div  className="rounded-full h-6 w-6 border" style={{backgroundColor : data.color.value}} />
                <div className="font-semibold border border-black py-3 px-6 rounded-md">
                    {data.size.value}
                </div>
            </div>
        </div>
    )
}

export default ProductCard