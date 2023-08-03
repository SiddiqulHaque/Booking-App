import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return <div className="navbar">
    <div className="nav-container">
      <span className="logo">Booking</span>
      <div className="nav-items">
        <button  className="nav-buttons">Login</button>
        <button className="nav-buttons">Register</button>
      </div>
    </div>
  </div>
};

export default Navbar;
