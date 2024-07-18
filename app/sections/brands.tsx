import {brands} from '../assets/constants'
export function Brands() {
    return (<>
    <div className=' h-20 mb-28 flex justify-center relative'>
        <div className='w-[700px] max-md:w-full justify-center h-full grid grid-cols-4   md:grid-cols-7  gap-4'>
            {brands.logo.map((brand) =>{
                return <div key={brand.name} className='w-4/5 hover:-translate-y-4 transition-all duration-300  overflow-hidden   relative flex items-center justify-center '>{brand.svg}</div>
            })}
        </div>
    </div>  
    </>);   
}   
