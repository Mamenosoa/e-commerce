import { FeatureProducts } from "./landing/FeatureProducts";
import { Hero } from "./landing/HeroSection";
import { Brands } from "./ui/brands";

export default function Page(){
  return(<>
   <div className="w-full flex justify-center">
   <main className="  relative w-[90%] max-w-[1200px] max-md:w-[97%]  md:w-11/12 h-full">
   <Hero/>
    <Brands/>
    <FeatureProducts/>
   </main>
   </div>
  </>)
}