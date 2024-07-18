import {Card, CardHeader, CardBody, CardFooter, Image, Button, } from "@nextui-org/react";
import Link from "next/link";
import { Badge } from "./badge";
export  function Sneaker(){
    return <>
       <Card   isPressable shadow="sm" radius="sm"  className=" w-full block group/card  ">
       <Link href={"/#"}>
      <CardBody className="overflow-visible flex justify-center relative items-center p-0 bg-card">
          <div className="absolute top-4 left-4">
          <Badge  brandName="AirJord" />
          </div>
              <Image
                width="100%"
                alt="sneakers"
                className="w-full object-cover origin-center block group-hover/card:rotate-12 "
                src="/airjord1png.png "
              />
      </CardBody>
      <CardFooter >
        <div className="mt-2 p-4">
        <h2 className="text-xl text-start mb-2">Air Jordan 1 Retro High OG 'Shadow' 2018</h2>
        <h2 className="font-bold text-xl text-start mb-3">$200</h2>
        </div>
      </CardFooter>
       </Link>
    </Card>
    </>
}