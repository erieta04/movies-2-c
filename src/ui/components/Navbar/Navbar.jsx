import React from "react";
import "./Navbar.css";

const Navbar = ()=> {
    return <nav className='navbar'>
        <h1>Movies2c</h1>
        <div className="navbar_links">
            <a href="">Movies</a>
            <a href="">Actors</a>
            <a href="">Directors</a>
        </div>
    </nav>
};

export default Navbar;