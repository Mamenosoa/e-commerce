'use client'
import {motion} from 'framer-motion'
import { PropsWithChildren } from 'react'

export function ElementFade({children}:PropsWithChildren){
return (<>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>{children}</motion.div>
</>)
}