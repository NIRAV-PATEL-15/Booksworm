import React from "react";
import HeroItem from "./HeroItem/HeroItem";
import './hero.css'
import Img1 from '../../../Assets/images/hero/img1.jpg'
import Img2 from '../../../Assets/images/hero/img4.jpg'
import Img3 from '../../../Assets/images/hero/img2.jpg'
const Hero = () => {
  return (
    <div className="hero-container">
      <HeroItem text="Read, Learn, Grow." Image={Img1}/>
      <HeroItem text="Unleash Your Imagination." Image={Img2} />
      <HeroItem text="Adventures in Books" Image={Img3} />
    </div>
  );
};

export default Hero;
