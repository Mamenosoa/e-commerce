// import { Image } from '@nextui-org/image'
'use client';
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonCutsom } from '../ui/button';
import { sneakersCategories } from '../assets/constants';
import Next from '../assets/images/icon/filter/direction.svg'
export function Categories(){
    const [emblaRef,emblaApi] = useEmblaCarousel()
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
    return (<>    
    <div className='w-full mt-28 mb-20'>
        {/* <h1 className="text-2xl w-full font-bold mb-sm">Shop By Categories</h1> */}
        <h3 className=" w-full  mb-4">Shop By Categories</h3>
    <div className="overflow-hidden w-full relative flex justify-center  h-80 py-2" ref={emblaRef}>
        <div className="w-full relative h-full flex gap-2"> 
        {sneakersCategories.categories.map((category,index)=>{
            return <div key={index} className="relative rounded-lg group/category  border-2 flex-shrink-0 basis-[calc(100%-0.5%)] md:basis-[calc(100%/2-0.5%)] lg:basis-[calc(100%/3-0.5%)] h-full overflow-hidden  max-lg:mb-4">
            <span className="absolute inset-0 bg-black/40"></span>
            <div className="absolute bottom-8 left-8">
                    <Link href="#"><h1 className="text-4xl text-white font-medium mb-2 capitalize">{category.name}</h1></Link>
                    <span className='h-1 absolute bottom-0 left-0  w-12 bg-white group-hover/category:w-full transition-all duration-300'></span>
            </div>
            <Image src={category.image} alt="running" className=" lg:object-cover" />
        </div>
        })}
       </div>
      </div>
    <div className='w-full flex gap-4 mt-2 justify-end'>
      <button className="embla__prev block"  onClick={scrollPrev}>
        <Next className="h-full w-ful rotate-180"/>
      </button>
      <button className="embla__next block" onClick={scrollNext}>   
      <Next className="h-full w-full "/>
      </button>
    </div>
    </div>      
   
    </>)
}