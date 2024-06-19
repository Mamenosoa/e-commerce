export function Navbar(){
    return(<>
        <div className="flex justify-between items-center py-sm">
            <div className="">
          <h1>LOGO</h1>
</div>
            <div className="navbar-items">
                <ul className="flex gap-4 mr-7">
                    <li className="text-sm font-bold underline-offset-2 underline">SHOP</li>
                    <li className="text-sm ">MEN</li>
                    <li className="text-sm ">WOMEN</li>
                </ul>
            </div>
        </div>
    </>)
}