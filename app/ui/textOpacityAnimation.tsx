'use client';
import {motion} from "framer-motion"
type textOpacityAnimation = {
    content:string,
    duration: number,
    fontSize:string,
    className?:string
}
export function TextOpacityAnimation({content,duration,fontSize,className}:textOpacityAnimation){
    const text = content.split("")
return (<>
<div className={`${className}`}>
{text.map((lettre,index)=>{
    console.log(content.length)
     return <motion.span className= {`${fontSize}`} initial={{opacity:0}} animate={{opacity:1}}   transition={{duration:index/content.length,delay:(duration/content.length)*index}}>{lettre}</motion.span>
})}
</div>
</>)
}