import {Card, CardHeader, CardBody, CardFooter, Image, Button, } from "@nextui-org/react";
import Link from "next/link";
import { Badge } from "./badge";
export  function Products(){
    return <>
       <Card   isPressable  className="pl-5 w-full block  rounded-none">
       <Link href={"/#"}>
      <CardHeader>
        <Badge  brandName="AirJord"/>
      </CardHeader>
      <CardBody className="overflow-visible flex justify-center items-center p-0">
              <Image
                width="100%"
                alt="sneakers"
                className="w-full object-cover block"
                src="https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"
              />
      </CardBody>
      <CardFooter >
        <div>
        <h2 className="text-xl text-start mb-5">Air Jordan 1 Retro High OG 'Shadow' 2018</h2>
        <h2 className="font-bold text-xl text-start mb-3">$200</h2>
        </div>
      </CardFooter>
       </Link>
    </Card>
    </>
}