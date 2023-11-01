import React from 'react'
import herohand from '../Assets/herohand.png'
import heroimage from '../Assets/heroimage.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={herohand} alt='loading...'/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest collection</div>
                <img src='' alt='loadin...'/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={heroimage} alt='loading' />
        </div>
    </div>
  )
}

export default Hero