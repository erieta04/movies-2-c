import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movies2c</h1>

      <div className="navbar_links">
        <Link to="/">Movies</Link>
        <Link to="/">Actors</Link>
        <Link to="/">Directors</Link>

        {/* Link για Login */}
        <Link to="/login" className="login-button-wrapper"> 
          <button className="login-btn">Login</button>
        </Link>
        
        {/* Νέο Link για Sign Up */}
        <Link to="/signup" className="signup-button-wrapper">
          <button className="login-btn signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;