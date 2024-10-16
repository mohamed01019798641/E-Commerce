import React from 'react'
import './Hero.css'
import  hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEEW ARRIVLS ONLY</h2>
            <p>new</p>
            <div className='hand-icon'>
            <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
            <div>
                Latest Collection
            </div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
