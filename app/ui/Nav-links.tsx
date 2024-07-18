'use client'
import { NavbarItem } from "@nextui-org/react"
import { menuItems_url } from "../assets/constants"
import { usePathname } from "next/navigation"
import Link from 'next/link'
export function NavLinks(){
    const pathname = usePathname()
    console.log(pathname)
    return (<>
    {menuItems_url.map((item,index)=>{
        return <NavbarItem isActive={pathname == item.href} key={index}>    
        <Link   href={item.href} className="font-medium ">
        {item.name}
        </Link>
    </NavbarItem>
    })}
    </>)
}