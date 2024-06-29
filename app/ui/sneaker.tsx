import Image from "next/image";
import type { sneaker } from "../lib/definitions";
import { Badge } from "./badge";
export function Sneaker({image,name,price,brandname}:sneaker){
    return (<>
        <div className="w-full rounded-md relative ">
            <div className="absolute">
                <Badge brandName={brandname}/>
            </div>
            <Image src={image} alt={name}/>
            <p>{name}</p>
            <p>{price}$</p>
        </div>
    </>)
}