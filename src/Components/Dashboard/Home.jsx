import React from 'react'
import './home.css'
import Hero from './HeroSection/Hero'
import Landing from './Landing/Landing'
import Carousal from './Carousal/Carousal'
const Home = () => {
  return (
    <div className='container'>
      <Landing/>
<Hero/>
<Carousal/>
    </div>
  )
}

export default Home