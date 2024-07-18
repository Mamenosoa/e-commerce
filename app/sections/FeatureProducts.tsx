import Link from 'next/link'
import { LatestProducts } from "../ui/LatestSneakers";
export function FeatureProducts(){
return (<>
    <div>
    <h3 className=" w-full">Feature Shoes</h3>
    <p className='w-full text-end pr-2'><Link href="/shop" className='underline-offset-2'>See All</Link></p>
    <LatestProducts/>
    </div>
</>)
}