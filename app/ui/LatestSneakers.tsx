'use client';
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Products } from './sneakers';
import { Link } from '@nextui-org/react';
export function LatestProducts() {
  const [emblaRef,emblaApi] = useEmblaCarousel()
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (<>
  <div className="overflow-hidden w-full relative flex justify-center px-1 h-auto py-2" ref={emblaRef}> 
      <div className="w-full md:columns-2 gap-y-2 lg:columns-3 xl:flex lg:gap-x-2 ">
        <div className="relative  xl-flex xl:flex-shrink-0 xl:basis-[calc(100%/4-0.5%)] max-xl:mb-2"><Products/></div>
        <div className="relative  xl-flex xl:flex-shrink-0 xl:basis-[calc(100%/4-0.5%)] max-xl:mb-2"><Products/></div>
        <div className="relative  xl-flex xl:flex-shrink-0 xl:basis-[calc(100%/4-0.5%)] max-xl:mb-2"><Products/></div>
        <div className="relative  xl-flex xl:flex-shrink-0 xl:basis-[calc(100%/4-0.5%)] max-xl:mb-2"><Products/></div>
        <div className="relative  xl-flex xl:flex-shrink-0 xl:basis-[calc(100%/4-0.5%)] max-xl:mb-2"><Products/></div>
        <div className="relative  xl-flex xl:flex-shrink-0 xl:basis-[calc(100%/4-0.5%)] max-xl:mb-2"><Products/></div>
      </div>
    </div>
    <div className='max-lg:hidden'>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
    </>
)
}
