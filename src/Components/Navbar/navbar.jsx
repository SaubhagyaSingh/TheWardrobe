import React from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <img src={logo} className="logo"></img>
        <h1>The Wardrobe</h1>
      </div>
      <div className="Categories">
        <li>New Arrivals</li>
        <li>Cart</li>
        <li>About Us</li>
        <li>Login</li>
      </div>
    </div>
  );
};

export default navbar;
