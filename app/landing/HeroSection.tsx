import Image from "next/image";
import { Navbar } from "../ui/Navbar";
import image from '@/public/sneakers.png'
import { Button } from "@nextui-org/react";
import { Carouselles } from "../ui/Carousel";
import { ButtonCutsom } from "../ui/button";
export function Hero(){
    return(<>                     
        <div className="flex w-full h-screen pb-xl pt-sm relative screen   max-h-[850px] ">   
                <div className=" flex flex-col gap-28  relative w-full">
                                <Navbar/>
                            <div className="w-[370px] md:w-[490px]  lg:w-[510px] relative">
                                 <p className="text-sm text-bold mb-sm">A NEW, APPROACHABLE FACE FOR YOUR ENVIRONMENTALE CONSCIOUS SHOPPING</p>
                                <p className="text-4xl font-medium mb-lg md:text-5xl xlm:text-6xl xlm:w-[780px]  ">Enjoy limeted series sneakers without limitations</p>
                                {/* <a className="group mb-lg inline-block rounded-full hover:bg-accent border-2 border-accent  hover:text-white focus:outline-none focus:ring-accent " href="#">
                                        <span
                                            className="block rounded-full bg-white px-8 py-3 group-hover:bg-accent text-sm font-medium"
                                        >
                                            SHOP NOW
                                        </span> 
                                </a>     */}
                                <ButtonCutsom size="lg" variant="bordered" color="active"  radius="full" className="mb-lg">SHOP NOW</ButtonCutsom>
                                <div className=" w-64 border-2 pl-sm py-sm rounded-xl bg-[#E2E5FF] ">
                                    <p className="text-5xl font-bold mb-xs">35k<strong className="text-[#2F66A3] font-bold">+</strong></p>
                                    <p className="text-sm">Customers who buy our products</p>
                                    
                                </div>                
                        </div>
                       
                    </div>
            <div className=" w-0 h-full relative  hidden lgm:flex lgm:justify-end lg:w-full    ">
                <Carouselles/>
            </div>
        </div>
    </>)
}