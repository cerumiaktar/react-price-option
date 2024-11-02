import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const CustomNav = () => {
    const[open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Blog", path: "/blog" },
        { id: 4, name: "Profile", path: "/profile" },
        { id: 5, name: "Settings", path: "/settings" }
    ];


    return (
        <nav className="bg-yellow-400 p-4">
            <div onClick={()=> setOpen(!open)} className="text-xl md:hidden">
                {
                    open === true ? <IoCloseOutline />:<IoMenuOutline />
                }
                
            </div>
            <ul className={`md:flex absolute  md:static
                ${open ? 'top-16' : '-top-60'}
                bg-yellow-400 px-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default CustomNav;