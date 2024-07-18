import Image from "next/image"
import { ButtonCutsom } from "../ui/button"
import men from '../assets/images/gender/men.jpg'
import women from '../assets/images/gender/women.jpg'

export  function GenderCollection(){
return (<>
    <div className="mt-20 mb-28 pl-3">
        <h1 className="text-3xl w-full font-medium mb-lg">Shop by gender</h1>
        <div className=" flex flex-col lg:flex-row w-full ">
            {/* <ButtonCutsom color="normal">SHOP</ButtonCutsom> */}
            <div className="w-full overflow-hidden rounded-tl-3xl  h-96 rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-tr-none relative">
                <span className="absolute inset-0 bg-black/40"></span>
                <Image alt="men" src={men} className="object-cover h-full"/>
                <div className="absolute bottom-8 left-8">
                    <h1 className="text-4xl text-white font-medium mb-2">Women</h1>
                    <div><ButtonCutsom size="sm" color="normal" radius="full">SHOP</ButtonCutsom></div>
                </div>
                </div>
            <div className="w-full overflow-hidden relative  lg:rounded-tr-3xl  h-96  rounded-br-3xl lg:rounded-bl-none rounded-bl-3xl">
                <span className="absolute inset-0 bg-black/40"></span>
                <Image alt="women" src={women} className="object-cover h-full"/>
                <div className="absolute bottom-8 left-8">
                    <h1 className="text-4xl text-white font-medium mb-2">Men</h1>
                    <div><ButtonCutsom size="sm" color="normal" radius="full">SHOP</ButtonCutsom></div>
                </div>
                </div>
        </div>
    </div>
</>)
}   