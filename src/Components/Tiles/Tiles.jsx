import React from "react";
import "./tiles.css";
import kurti from "../Assets/kurti.jpeg";

const Tiles = () => {
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={kurti}></img>
          </div>
          <div class="contentBx">
            <h2>Kurti</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
            <div class="color">
              <h3>Price:</h3>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div class="card">
          <div class="imgBx">
            <img src={kurti}></img>
          </div>
          <div class="contentBx">
            <h2>Kurti</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
            <div class="color">
              <h3>Price:</h3>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div class="card">
          <div class="imgBx">
            <img src={kurti}></img>
          </div>
          <div class="contentBx">
            <h2>Kurti</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
            <div class="color">
              <h3>Price:</h3>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
        <div class="card">
          <div class="imgBx">
            <img src={kurti}></img>
          </div>
          <div class="contentBx">
            <h2>Kurti</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
            <div class="color">
              <h3>Price:</h3>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
