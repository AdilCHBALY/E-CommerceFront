"use client"

import { Tab } from "@headlessui/react"
import Image from "next/image"

import { Image as ImageType } from "@/type"
import GalleryTab from "./GalleryTab"

interface GalleryProps{
  images : ImageType[]
}

const Gallery:React.FC<GalleryProps> = ({images}) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image)=>(
            <GalleryTab  
              key={image.id}
              image={image}
            />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
            {images.map((image)=>(
              <Tab.Panel key={image.id}>
                  <div className="sm:rounded-lg overflow-hidden aspect-square relative h-full w-full">
                      <Image
                        fill
                        alt=""
                        src={image.url}
                        className="object-cover object-center"
                      />
                  </div>
              </Tab.Panel>
            ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Gallery