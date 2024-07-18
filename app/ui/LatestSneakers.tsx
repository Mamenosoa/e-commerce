'use client';
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Sneaker } from './sneaker';
import { Link } from '@nextui-org/react';
import Next from '../assets/images/icon/filter/direction.svg'
export function LatestProducts() {
  const initial = 6
  const [emblaRef,emblaApi] = useEmblaCarousel()
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (<>
   <div className="overflow-hidden w-full relative flex justify-center px-1 h-auto py-2" ref={emblaRef}> 
      <div className="w-full  max-md:columns-1 max-lg:columns-2 lg:flex lg:gap-x-2 ">
    {Array(initial).fill(1).map(i=>{
       return  <div key={i} className="relative  lg-flex lg:flex-shrink-0 lg:basis-[calc(100%/3-0.5%)] xl:basis-[calc(100%/4-0.5%)] max-lg:mb-4"><Sneaker/></div>
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
    </>
)
}
