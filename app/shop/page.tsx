import { Sneaker } from "../ui/sneaker";

export default function Page(){
    return <div className="w-full  flex relative  mt-28">
        <div className=" h-full lg:w-52 flex-none hidden xl:block "></div>
        <div className=" h-full w-full gap-4 pt-3 ptl-3 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
            <Sneaker/>
        </div>
    </div>
}