import Image from "next/image";
import { NavbarCustom } from "../ui/Navbar";
import image from '@/public/sneakers.png'
import { Button} from "@nextui-org/react";
import { NewSneakers } from "../ui/NewSneakers";
import { ButtonCutsom } from "../ui/button";
import { statistics } from "../assets/constants";
import { hero } from "../assets/constants";
import { TopSneakers } from "../ui/home_components/topSneakers";
import { topSneakersLists } from "../assets/constants";
import Link from 'next/link'
// import Link from 'next/link'
import { TextAnimation } from "../ui/textAnimation";
import { ElementFade } from "../ui/ElementFade";
import { TextOpacityAnimation } from "../ui/textOpacityAnimation";
export function Hero(){
    return(<>                     
      <section  className="w-full lgh:gap-12 gap-1 max-lg:gap-12  relative flex mt-48 mb-28 items-start justify-center flex-col lg:flex-row ">  
        <div className="h-auto p-3  w-full   flex relative ">
           <div className="relative w-full flex flex-col ">
           <TextOpacityAnimation content={hero.title1} fontSize="text-small xl:text-sm " duration={4} className="xl:w-[610px]"/> 
            <TextAnimation content="Enjoy limeted series" className="font-medium xl:mb-3" textSize="text-4xl md:text-5xl  xl:text-6xl"/>
            <TextAnimation content="sneakers without" className="font-medium xl:mb-3" textSize="text-4xl md:text-5xl xl:text-6xl"/>
            <TextAnimation content="limitations" className="font-medium xl:mb-3" textSize="text-4xl md:text-5xl xl:text-6xl"/>
            <div>
          {/* <Link  href="/shop" color="primary" size="lg">SHOP NOW</Link> */}
          <ButtonCutsom href="/shop" color="active" radius="full" as={Link} size="lg"  >
            SHOP NOW
          </ButtonCutsom>
          {/* <Link className="text-base p-4 bg-bg-1 rounded-full text-white font-normal" href="/shop">SHOP NOW</Link> */}
            </div>
           </div>
        </div>
            <TopSneakers topLists={topSneakersLists} />
       </section>
    </>)
}   