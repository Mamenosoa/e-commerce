import { Categories } from "./sections/Categories";
import { FeatureProducts } from "./sections/FeatureProducts";
import { Hero } from "./sections/HeroSection";
import { Brands } from "./sections/brands";
import { Footer } from "./sections/footer";
import { GenderCollection } from "./sections/genderCollection";
import { NavbarCustom } from "./ui/Navbar";

export default function Page(){
  return(<>
    <Hero/>
     <Brands/>
     <Categories/>   
    <FeatureProducts/>    
    <GenderCollection/>    
     <Footer/>
  </>)
}