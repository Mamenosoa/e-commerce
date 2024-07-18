import Image from "next/image";
import image from '@/public/sneakers.png'
import { Badge } from "./badge";
export function NewSneakers(){
    return (<>
    <div className=" w-100 h-full  max-md:hidden relative  flex items-center flex-col justify-center pl-xl pb-xl bg-[#E2E5FF] ">
            <div className="absolute top-8 left-16">
              <Badge brandName="Adidas"/> 
            </div>
            <div className="w-full overflow-hidden">
               <Image src={image} alt="sneakers" width={400} height={400} className="block  -translate-x-4" />
            </div>
            <div className="w-full pr-sm">
              <p className="text-2xl text-bold mb-sm">Air Jordan 1 Retro High OG 'Turbo Green'</p>
            </div>
            <div className="absolute right-4 bottom-2">   
            <a className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="#"
>
  <span className="sr-only"> Download </span>

  <svg
    className="size-5 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</a>
            </div>
    </div>
    </>)
}