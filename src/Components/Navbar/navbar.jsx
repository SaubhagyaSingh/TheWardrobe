import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <img src="../Assets/logo.png" className="logo"></img>
      <div className="heading">
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
