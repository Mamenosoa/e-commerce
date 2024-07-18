'use client'
import { logo, menuItems } from "../assets/constants"
import { NavIcon } from "./NavIcon"
import{ useState } from "react";
import Link from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem , Button, Tooltip} from "@nextui-org/react";
import { ButtonCutsom } from "./button";
import { NavLinks } from "./Nav-links";
import { Logo } from "./logo";
import { icon } from "../assets/constants";
import Image from "next/image";
import { useRouter } from "next/router";
export function NavbarCustom(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const router = useRouter()
  return (
   <div className="absolute top-0 left-0 right-0">
     <Navbar onMenuOpenChange={setIsMenuOpen}  isBlurred={false} maxWidth="full"  position="static"
    classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        menu:" !h-[50vh] mt-4  flex items-center",base:"w-full  flex items-center",
       
      }}
    >
      <NavbarContent >
            <NavbarBrand>
                <Logo/>
              </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden lg:flex gap-5" justify="center">
        <NavLinks/>
      </NavbarContent>
      <NavbarContent justify="end" className="flex gap-4">
          <NavbarItem className="hidden mdi:block">
            <Tooltip content="CART" color="primary" placement="bottom-start">
               <Link href="/cart" >
                  <Image width={50} src="/Cart.svg" className="mt-[6px]" alt="cart" height={50}/>
                  </Link>
            </Tooltip>
              
          </NavbarItem> 
          <NavbarItem className="hidden mdi:block  ">
          <Tooltip content="FAVORITE" color="primary" placement="bottom-start">
            <Link href="/favorite" >
              <Image width={50} src="/favorite.svg" className="mt-[7px]" alt="favorite" height={50}/>
            </Link>
            </Tooltip>
          </NavbarItem>
        <NavbarItem>
        <ButtonCutsom href="/login" color="active" radius="full" as={Link} size="lg"  >
            LOGIN
          </ButtonCutsom>
        </NavbarItem>
         <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden lg:w-0 " 
            />
      </NavbarContent>
      <NavbarMenu >
        <div className="relative  items-center h-full grid grid-rows-5 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}` } >
              <Link
              className="w-full flex justify-center h-[100%/3]"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem >
        ))}
        </div>
      </NavbarMenu>
      
    </Navbar>
   </div>
  );
}
