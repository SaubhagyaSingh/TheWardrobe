import React from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <img src={logo} className="logo"></img>
        <h1>The Wardrobe</h1>
      </div>
      <div className="Categories">
        <ul>
          <li>
            <Link to="/">New Arrivals</Link>
          </li>
          <li>
            <a href="#">Collections</a>
            <ul className="cat">
              <li>Suits</li>
              <li>Dupatte</li>
              <li>Bags</li>
              <li>Sarees</li>
              <li>Gowns</li>
              <li>Skirts</li>
              <li>Kurtis</li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
          <Link to="/cart">Cart</Link>
          </li>
          <li>
          <Link to="/"></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
