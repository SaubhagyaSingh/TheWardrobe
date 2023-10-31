import React from "react";
import "./hero.css";
import k2 from "../Assets/k2.webp";
import saree from "../Assets/saree.webp";
import suits from "../Assets/suits.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="containers">
        <div id="proparallax">
          <img class="one" src={k2}></img>
          <img class="two" src={saree}></img>
          <img class="three" src={suits}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
