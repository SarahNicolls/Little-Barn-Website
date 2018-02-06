import React from "react";

import About from "./About";
import Hero from "./Hero";
import ImageLinks from "./ImageLinks";
import Reviews from "./Reviews";
import SocialMedia from "./SocialMedia";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <ImageLinks />
      <Reviews />
      <SocialMedia />
    </div>
  );
};

export default HomePage;
