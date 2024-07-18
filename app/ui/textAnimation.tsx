'use client';
import {motion} from 'framer-motion'
type TextAnimation ={
    className?:string,
    content: string,
    textSize:string
}
export function TextAnimation({className="",content,textSize}:TextAnimation){
    return <div className={`${className} overflow-hidden py-1`}>
        <motion.h4 initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{y:{duration:0.3}}} className={`${textSize} `}>{content}</motion.h4>
    </div>
}