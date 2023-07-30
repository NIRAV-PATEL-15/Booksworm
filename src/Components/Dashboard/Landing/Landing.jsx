import React from 'react'
import './landing.css'
const Landing = () => {
  return (
    <div className='box'>
      <div className="content">
        <div className="top-text"><h1>Welcome to Booksworm book store</h1></div>
        <div className="bottom-text">With us, you can shop online & help save your high street at the same time</div>
        <div className="explr-btn-container">
          <button className='explr-btn'>Explore Book<i class="bi bi-arrow-right-short fa-2x"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Landing