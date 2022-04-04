import React from "react";
import AirLogo from "../assets/airbnb-img.png";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <img src={AirLogo} alt="Airbnb Logo"/>
        </nav>
    )
}

export default Navbar;