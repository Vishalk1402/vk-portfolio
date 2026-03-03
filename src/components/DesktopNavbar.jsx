import React from "react";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
    return (
        <div className="min-h-screen bg-gray-950 relative text-3xl font-bold text-stone-400">

            <div
                className=" absolute z-50 top-0 left-0 h-40 w-40 bg-gray-900
                   flex items-center justify-center
                   hover:bg-gray-600 transition
                   "
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            >
                <Link to="/" className="-rotate-45 hover:text-fuchsia-700 transition -translate-x-7.5 -translate-y-5">
                    Home
                </Link>
            </div>

            <div
                className="absolute z-50 top-0 right-0 h-40 w-40 bg-gray-900
                   flex items-center justify-center
                   hover:bg-gray-600 transition"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
            >
                <Link to="/projects" className="rotate-45 hover:text-fuchsia-700 transition translate-x-7 -translate-y-5 ">
                    Projects
                </Link>
            </div>

            <div
                className="absolute z-50 bottom-0 left-0 h-40 w-40 bg-gray-900
                   flex items-center justify-center
                   hover:bg-gray-600 transition"
                style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
            >
                <Link to="/about" className="-rotate-135 hover:text-fuchsia-700 transition -translate-x-7.5 translate-y-5 ">
                    About
                </Link>
            </div>

            <div
                className="absolute z-50 bottom-0 right-0 h-40 w-40 bg-gray-900
                   flex items-center justify-center
                   hover:bg-gray-600
                   hover:shadow-md shadow-amber-100 transition duration-200 "
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
            >
                <Link to="/contact" className="rotate-135 hover:text-fuchsia-700 transition translate-x-7 translate-y-5 ">
                    Contact
                </Link>
            </div>

           <div className={"hidden md:block"}>
               <ul className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-6 text-xl bg-black rounded-3xl px-10 shadow-sm shadow-[#ff8e4d] py-2">
                   <li><a href="#" className="hover:text-gray-500 ease-in-out duration-600 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg ">Resume</a></li>
                   <li><a href="https://github.com/Vishalk1402" target="_blank" rel="noreferrer" className="transition-all ease-in-out duration-600  hover:text-gray-500 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg   ">GitHub</a></li>
                   <li><a href="https://www.youtube.com/@javawithvk" target="_blank" rel="noreferrer" className="hover:text-gray-500 ease-in-out duration-600 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg">YouTube</a></li>
                   <li><a href="https://www.instagram.com/javawithvk/" target="_blank" rel="noreferrer" className="hover:text-gray-500 ease-in-out duration-600 hover:shadow-gray-500 hover:shadow-2xl hover:text-lg">Instagram</a></li>
               </ul>
           </div>
        </div>
    );
};

export default DesktopNavbar;
