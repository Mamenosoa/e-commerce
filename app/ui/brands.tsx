import Adidas from '/public/brands/adidas.svg'
import Gucci from '/public/brands/gucci.svg'
import Jordan from '/public/brands/airjordan.svg'
import Nike from '/public/brands/nike.svg'
export function Brands() {
    return (<>
    <div className='mb-16'>
    <h1 className='text-center  w-full text-2xl mb-lg font-medium'>SOME OF OUR TRUSTED BRANDS</h1>
        <div className='w-[600px] max-md:w-full grid justify-center container grid-cols-4 relative gap-4'>
            <div className='w-4/5 size-2/3 bg overflow-hidden   relative flex items-center justify-center '><Adidas/></div>
            <div className='w-4/5 size-2/3 bg overflow-hidden   relative flex items-center justify-center'><Gucci/></div>
            <div className='w-4/5 size-2/3 bg overflow-hidden   relative flex items-center justify-center'><Jordan /></div>
            <div className='w-4/5 size-2/3 bg overflow-hidden   relative flex items-center justify-center'><Nike/></div>
        </div>
    </div>
    </>);   
}
