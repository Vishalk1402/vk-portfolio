import React from "react";
import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar.jsx";
import MobileNavbar from "./MobileNavbar.jsx";

const Navbar = () => {
    return (
        <div>
            <div className={"grid place-content-center relative right-4"}>
                <MobileNavbar/>
            </div>
            <DesktopNavbar/>
        </div>
    );
};

export default Navbar;
