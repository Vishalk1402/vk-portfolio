import React, {useState} from "react";
import {Link} from "react-router-dom";
import  {Menu,X} from "lucide-react";

const MobileNavbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className={"md:hidden "}>
            <button className={"z-50 fixed  rounded-2xl  p-1 mt-1  text-white"} onClick={() => {
                setMenu(prev=>!prev);
                console.log(menu);
            }}>{menu?<X/>:<Menu/>}</button>
            <div
                className={`
                fixed inset-0 bg-black/40 backdrop-blur-sm z-40
                transition-opacity duration-300
                ${menu ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}  
                onClick={() => setMenu(false)}
            />
            {menu&&
                <nav className="md:hidden  z-60 fixed text-4xl  text-center bottom-0 right-0 left-0 bg-gray-950 h-56 text-white  ">
                    <ul className="flex flex-col gap-4">
                        <li onClick={()=>{setMenu(false)}}><a href="https://1drv.ms/b/c/2054d539aeef2cd9/IQA-5hODux1ZRYKK3drLVa73AV7BXBuMY6feRcdNjEk-TZI?e=zAtUtZ" target="_blank" className="hover:text-gray-500 ease-in-out duration-600 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg ">Resume</a></li>
                        <li onClick={()=>{setMenu(false)}}><a href="https://github.com/Vishalk1402" target="_blank" rel="noreferrer" className="transition-all ease-in-out duration-600  hover:text-gray-500 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg   ">GitHub</a></li>
                        <li onClick={()=>{setMenu(false)}}><a href="https://www.youtube.com/@javawithvk" target="_blank" rel="noreferrer" className="hover:text-gray-500 ease-in-out duration-600 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg">YouTube</a></li>
                        <li onClick={()=>{setMenu(false)}}><a href="https://www.instagram.com/javawithvk/" target="_blank" rel="noreferrer" className="hover:text-gray-500 ease-in-out duration-600 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg">Instagram</a></li>
                    </ul>
                </nav>
            }
        </div>
    );
};

export default MobileNavbar;
