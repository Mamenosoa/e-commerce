import Image from "next/image";
import { Navbar } from "../ui/Navbar";
import image from '@/public/sneakers.png'
export function Hero(){
    return(<>                     
        <div className="flex w-full h-screen pb-xl max-md:h-[620px]  pt-sm relative max-h-[768px] ">
           {/* <div className="relative "> */}
                <div className=" flex flex-col min-h-[612px]  justify-between  ">
                                <Navbar/>
                            <div className="min-md:max-w-[510px] max-lg:max-w-[780px] relative">
                                <p className="text-sm text-bold mb-sm max-md:text-sm">A NEW, APPROACHABLE FACE FOR YOUR ENVIRONMENTALE CONSCIOUS SHOPPING</p>
                                <p className="text-6xl mb-lg max-md:text-4xl max-lg:w-full ">Enjoy limeted series sneakers without limitations</p>
                                <button className="mb-lg px-lg py-4 border-2 rounded-full max-md:text-sm  border-[#FFAF00]">SHOP NOW</button>
                                <div className=" w-64 border-2 pl-sm py-sm rounded-xl bg-[#E2E5FF] ">
                                    <p className="text-5xl font-bold mb-xs">35k<strong className="text-[#2F66A3] font-bold">+</strong></p>
                                    <p className="text-sm">Customers who buy our products</p>
                                </div>
                        </div>
                    </div>
           {/* </div> */}
            <div className="relative flex justify-end items-center w-full h-full min-h-[612px]  max-lg:hidden  ">
                <div className=" w-100  max-md:hidden relative h-full flex items-center flex-col justify-center pl-xl pb-xl bg-[#E2E5FF] ">
                    <div>
                    <div className="w-80 h-80 overflow-hidden">
                        <Image src={image} alt="sneakers" width={400} height={400} className="block" />
                    </div>
                    <div className="w-full pr-xl">
                        <p className="text-xl text-bold mb-sm">TRAVIS SCOTT X AIR JORDAN 4 RETRO CATCUS JACK</p>
                        <div className="text-xs rounded-full text-white bg-black w-20 py-1 text-center ">AirJordan</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}