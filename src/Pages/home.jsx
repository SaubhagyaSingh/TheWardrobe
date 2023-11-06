import React from "react";
import Hero from "../Components/Hero/Hero";
import Tiles from "../Components/Tiles/Tiles";
import Cp from "../Components/Cp/Cp";
import Heading from "../Components/Heading/Heading";
import Grid from "../Components/Grid/Grid";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cp />
      <h1 className="Heading">Festive Crazy Offers</h1>
      <Grid />
      <Tiles />
    </div>
  );
};

export default Home;
