import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
  return <div className="navbar">
    <div className="nav-container">
    <Link to="/" style={{"color":"inherit","textDecoration":"none"}}>
    <span className="logo">Booking</span>
    </Link>
      
      <div className="nav-items">
        <button  className="nav-buttons">Login</button>
        <button className="nav-buttons">Register</button>
      </div>
    </div>
  </div>
};

export default Navbar;
