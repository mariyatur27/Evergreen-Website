import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
   <>
    <h1 className='centered'>What We Do</h1>
    <div className='row middle'>
      <div className='abt-box'>
        {/* <FontAwesomeIcon icon={faSquarePhone} /><br></br> */}
        <h2>Buy</h2>
        <p>We buy underperforming facilities in growing markets with great potential.</p>
      </div>
      <div className='abt-box'>
        <h2>Buy</h2>
        <p>We buy underperforming facilities in growing markets with great potential.</p>
      </div>
      <div className='abt-box'>
        <h2>Buy</h2>
        <p>We buy underperforming facilities in growing markets with great potential.</p>
      </div>
      <div className='abt-box'>
        <h2>Buy</h2>
        <p>We buy underperforming facilities in growing markets with great potential.</p>
      </div>
    </div>
    <div className='centered'>
      <button className='sec-btn'>Learn More</button>
    </div>
   </>
  )
}

export default About