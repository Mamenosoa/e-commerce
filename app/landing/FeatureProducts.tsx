import { Link } from "@nextui-org/react";
import { LatestProducts } from "../ui/LatestSneakers";
export function FeatureProducts(){
return (<>
    <div className="mt-32">
    <h1 className='text-center  w-full text-2xl mb-lg font-medium uppercase'>feature sneakers</h1>
    <h3 className='w-full text-end pr-2'><Link underline="hover" color="primary" href="/">View More</Link></h3>
   <LatestProducts/>
    </div>
</>)
}