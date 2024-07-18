'use client'
import {motion, stagger} from 'framer-motion'
import { useState } from 'react'
export function Animation(){
const nbr = 'A NEW, APPROACHABLE FACE FOR YOUR ENVIRONMENTALE CONSCIOUS SHOPPING'
const [anime,setAnime] = useState(false)
const variantParent = {
    visible:{opacity:1,transition:{staggerChildren:.3,when:"beforeChildren"}},
    hidden:{opacity:0,transition:{staggerChildren:.3,when:"afterChildren"}}
}
const childParent = {
    visible:{x:0,rotate:45},
    hidden:{x:100,rotate:45}
}

// const stagerItems = stagger
return (<>
{/* <motion.div initial={{opacity:0}} variants={variantParent} animate={anime ? "visible" : "hidden"}  className="flex gap-4 relative flex-col">
    {nbr.map((el)=>{
        return <motion.div  variants={childParent} key={el} animate={anime ? "visible" : "hidden"}  className="bg-black size-28">{el}</motion.div>
    })}
</motion.div> */}
<motion.div   className="flex relative  mt-28">
{nbr.split("").map((i,e)=>{
    console.log(e)
     return <motion.span className="text-small" initial={{opacity:0}} animate={{opacity:1}}   transition={{duration:(e)/nbr.length,delay:(.3/nbr.length)*e}}>{i}</motion.span>
    
})}
</motion.div>
{/* <button onClick={()=> setAnime(c=>!c)}>Start</button> */}
</>)
}