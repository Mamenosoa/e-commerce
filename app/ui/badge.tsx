import { Chip } from "@nextui-org/react"
type Badge = {
    brandName:string
}

export function Badge({brandName}:Badge){
    return (<>
 <Chip color="default" variant="bordered" classNames={{
    base: "bg-black text-white"
 }}>{brandName}</Chip>
         {/* <div className="text-xs rounded-full text-white bg-black w-20 py-1 text-center ">{brandName}</div> */}
    </>)
}