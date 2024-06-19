import { Hero } from "./landing/HeroSection";

export default function Page(){
  return(<>
   <div className="w-full flex justify-center">
   <main className=" relative w-[90%] max-w-7xl max-md:w-[97%]  md:w-11/12 h-full">
   <Hero/>
   <div className="h-48"></div>
   </main>
   </div>
  </>)
}