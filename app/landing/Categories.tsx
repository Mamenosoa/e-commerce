// import { Image } from '@nextui-org/image'
import Image from 'next/image'
import running from '/public/categories/running.jpg'
import basket from '/public/categories/basket.jpg'
import skaterboard from '/public/categories/skaterboard.png'
import sport from '/public/categories/sport.png'
export function Categories(){
    return (<>
        {/* <div className="w-full mb-12  ">
            <h1 className='text-center  mx-auto text-2xl mb-lg font-medium w-[800px]'>EXPLORE <strong className='text-accent'>OUR CATEGORIES</strong> TO FIND THE PERFECT SNEAKERS FOR EVERY NEED AND STYLE</h1>
            <div className="flex gap-4 overflow-x-auto w-full h-[299px] ">
                <div className=" group   flex-shrink-0 flex basis-[calc(100%/3-1%)] relative">
                    <div className="absolute hidden group-hover:flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1   relative'>RUNNING
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline'></span>
                        </div>

                    </div>
                    <Image src={running} alt='blaba' className='w-full object-cover z-0 '/>
                    
                </div>
                <div className=" group  flex-shrink-0 flex basis-[calc(100%/3-1%)] relative">
                    <div className="absolute hidden group-hover:flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1   relative'>BASKETBALL
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline'></span>
                        </div>

                    </div>
                    <Image src={basket} alt='blaba' className='w-full object-cover z-0 '/>
                </div>
                <div className=" group  flex-shrink-0 flex basis-[calc(100%/3-1%)] relative">
                    <div className="absolute hidden group-hover:flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1   relative'>SKATERBOARD
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline'></span>
                        </div>

                    </div>
                    <Image src={skaterboard} alt='blaba' className='w-full object-cover z-0 '/>
                </div>
                <div className=" group  flex-shrink-0 flex basis-[calc(100%/3-1%)] relative">
                    <div className="absolute hidden group-hover:flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1   relative'>SPORT
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline'></span>
                        </div>

                    </div>
                    <Image src={sport} alt='blaba' className='w-full object-cover z-0 '/>
                </div>
        </div>
        </div> */}
        <div className='w-full '>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
                <div className='col-span-4 xl:col-span-2  flex items-center h-[299px] '>
                    <h1 className='  mx-auto text-xl  md:text-4xl  mb-lg font-medium text-center  xl:text-start block'>EXPLORE <strong className='text-accent'>OUR CATEGORIES</strong> TO FIND THE PERFECT SNEAKERS FOR EVERY NEED AND STYLE</h1>
                </div>
                <div className='col-span-4 md:col-span-2 xl:col-span-1 relative group  overflow-hidden h-[299px]'> 
                    <div className="absolute flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1 relative'>RUNNING
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline'></span>
                        </div>

                    </div>                    
                    <Image src={running} alt='blaba' className=' object-cover md:h-full z-0 '/>
                </div>
                <div className='col-span-4 relative md:col-span-2 xl:col-span-1  overflow-hidden group h-[299px]'>
                    <div className="absolute  flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1 relative'>BASKETBALL
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline'></span>
                        </div>
                </div>  
                    <Image src={basket} alt='blaba' className='object-cover z-0 md:h-full '/></div> 
                <div className='col-span-4 xl:col-span-2 bg-[#99999B] flex justify-center  relative group h-[299px]'>
                    <div className="absolute  flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1 relative'>SPORT
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline '></span>
                        </div>  

                </div>  
                    <Image src={sport}  alt='blaba' className='block z-0 w-auto'/>
                    </div> 
                <div className='col-span-4 xl:col-span-2  realtive overflow-hidden group relative h-[299px] '>
                    <div className="absolute  flex transition-all delay-500 top-0 left-0 bottom-0 right-0 z-10 justify-center  items-center bg-black/40 ">
                        <div className='text-4xl text-center text-white flex justify-center py-1 relative'>SKATERBOARD
                        <span className='absolute bg-white h-1 left-0 bottom-0 w-[50px] group-hover:animate-underline '></span>
                        </div>

                </div>  
                    <Image src={skaterboard} alt='blaba' className='w-full object-contain z-0 '/></div> 

            </div>
        </div>
    </>)
}