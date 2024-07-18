'use client';
import type { topLists } from "@/app/lib/definitions";
import { Card } from "@nextui-org/card";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "../badge";
// import {m} from 'framer-motion'
import { motion,useAnimate} from "framer-motion";
import Link from 'next/link'
export  function TopSneakers({topLists}:{topLists:topLists[]}){
    const [viewTop, setViewTop] = useState<topLists>({
        url:topLists[0].url,
        name:topLists[0].name
    });
   const [isHover,setisHover] = useState<Boolean>(false)
   const linkVariants = {
    visible: {y:[44,0,0],width:[24,24,120]},
    hidden: {y:[0,0,-4,44],width:[120,24,24,24]}
   }
   const transitionIsHover = {
    times:[0,.2,0.4],
    y:{duration:0.3,type:'spring'},
    width:{duration:0.7,ease:"easeInOut"}
   }
   const transitionIsNotHover = {
    y:{duration:0.8,ease:"easeInOut"},
    width:{duration:0.3,type:'spring'}
   }
//    const [scope,animate] = useAnimate() 
//    useEffect(()=>{
//     // if(isHover){
//         animate(scope.current,{y:44,width:24})
//     // }
//     if(isHover){
//         animate(scope.current,linkVariants.visible,transitionIsHover)
//     }
//    },[isHover])
    return (<>
    <div className="h-full w-full  flex  xl:flex-row relative items-center gap-3 ">
        <div className="w-1/3 relative flex items-center flex-col  xl:flex-col md:flex-col  h-full gap-3">
        {topLists.map((sneaker,index)=>{
             return <Card isPressable shadow="none" radius="sm" key={index} onPress={(e)=> setViewTop(sneaker)}>
                 <div className="w-full grid-cols-5   bg-card" key={index}>
                            <Image width={100} src={sneaker.url} className="mx-auto " height={100} alt = {sneaker.name} />
                    </div>
                    </Card>
        })}
        </div> 
         <div className="w-full  h-full relative group/sneaker bg-card rounded-xl overflow-hidden" onMouseEnter={()=>setisHover(true)} onMouseLeave={()=>setisHover(false)}>
            <div className="absolute top-4 left-4">
                <Badge brandName="Air Jordan"/>
            </div>
            <div className="absolute bottom-4 left-4 border-2 ">
                {/* <span ref={scope}  className="absolute left-0 top-0 bottom-0 w-6 z-10   rounded-full pointer-events-none  bg-bg-1 "></span> */}
                <motion.span variants={linkVariants} initial={{y:44,width:24}}   animate={isHover ?  "visible" : "hidden"}  transition={isHover ? transitionIsHover : transitionIsNotHover}  className="absolute left-0 top-0 bottom-0 w-6 z-10   rounded-full pointer-events-none  bg-bg-1 "></motion.span>
                <Link href="#"  className="px-6 -y-2  z-20  relative w-full h-full">
                    <motion.span initial={{opacity:0}} animate= {isHover ? {opacity:1} : {opacity:0} } transition={{duration:0.5}} className="text-white">View More</motion.span>
                </Link>
            </div>
                <motion.div  className="rotate-12" initial={{rotate:0}} animate={{rotate:12}} transition={{duration:.3}}>
                <Image width={500} src={viewTop.url} className="mx-auto  ml-4 origin-center" height={500} alt = {viewTop.url} />
                </motion.div>
            </div>
        </div>      
    </>)
}