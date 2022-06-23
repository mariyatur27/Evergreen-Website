import React from 'react'

function Hero() {
  return (
   <div className='hero centered'>
    {/* Update the text */}
       <h1>Grow Your Wealth.</h1>
       <h3>Evergreen Wealth Partners</h3>
       <a href = '/#about-section'><button className='hero-btn'>Learn More</button></a><br></br>
       <a href = ''><button className='hero-btn bottom-space'>Invest</button></a>
   </div>
  )
}

export default Hero