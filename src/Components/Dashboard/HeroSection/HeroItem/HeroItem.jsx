import React from "react";
import "./hero-item.css";
import { Link } from "react-router-dom";
const HeroItem = ({Image,text}) => {
  return (
    <div className="hero-item">
      <div className="hero-left">
        <div className="left-container">

        <div className="left-top"><span className="title">{text}</span></div>
        <div className="left-bottom">
        <Link className="link-text">Read more...</Link>

        </div>
        </div>
      </div>
      <div className="hero-right">
        <img alt="hero-pic" src={Image} className="img-container"></img>
      </div>
    </div>
  );
};

export default HeroItem;
