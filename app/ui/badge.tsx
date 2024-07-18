import { Chip } from "@nextui-org/react"
type Badge = {
    brandName:string
}

export function Badge({brandName}:Badge){
    return (<>
 <Chip color="default" variant="bordered" size="md" classNames={{
    base: "bg-black text-white text-sm"
 }}>{brandName}</Chip>
         {/* <div className="text-xs rounded-full text-white bg-black w-20 py-1 text-center ">{brandName}</div> */}
    </>)
}