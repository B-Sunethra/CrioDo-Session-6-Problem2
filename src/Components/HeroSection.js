import React from "react";
import "./HeroSection.css"; // make sure to create this CSS file in your project
import logo from "../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <p className="sub-title">100 Thousand Songs, ad-free</p>
        <p className="main-title">Over thousands podcast episodes</p>
      </div>
      <img src={logo} alt="Headphones" className="headphones-image" />
    </div>
  );
};

export default HeroSection;
