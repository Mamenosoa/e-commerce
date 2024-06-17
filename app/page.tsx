import { Hero } from "./landing/HeroSection";

export default function Page(){
  return(<>
   <div className="w-full flex justify-center">
   <main className=" relative w-[90%] md:w-11/12 h-full">
   <Hero/>
   </main>
   </div>
  </>)
}