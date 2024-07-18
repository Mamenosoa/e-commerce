import { NavbarCustom } from "../ui/Navbar";

export default function Test(){
    return <>
        <div className="w-full relative">
            <main className="mx-auto  relative w-full  max-md:w-[97%]  md:w-11/12 h-full pt-4   ">
            <NavbarCustom/>
            <div className="w-full h-60 bg-slate-700">
            </div>
        </main>
        </div>
    </>
}