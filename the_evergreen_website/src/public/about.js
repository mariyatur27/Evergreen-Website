import React , { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faBasketShopping, faHammer, faRotateRight } from '@fortawesome/free-solid-svg-icons'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   <>
    <h1 className='centered' id="about-section">What We Do</h1>
    <div className='row middle' data-aos="fade-up">
      <div className='abt-box'>
        <FontAwesomeIcon icon={faBasketShopping} size='3x'/>
        <h2>Acquire</h2>
        <p>At Evergreen Wealth Partners, we generate solid returns and stable cash flow through purchasing undervalued self-storage facilities and then adding value & turning them around.</p>
      </div>
      <div className='abt-box'>
        <FontAwesomeIcon icon={faHammer} size='3x'/>
        <h2>Improve</h2>
        <p>We find great deals, stabilize them with strong operations, create value for our shareholders, and repeat the process repeatedly while minimizing risk at every turn.</p>
      </div>
      <div className='abt-box'>
        <FontAwesomeIcon icon={faArrowUpRightDots} size='3x'/>
        <h2>Grow</h2>
        <p>We drive revenue higher and lower costs through operational improvements to increase the value of our assets.</p>
      </div>
      <div className='abt-box'>
        <FontAwesomeIcon icon={faRotateRight} size='3x'/>
        <h2>Repeat</h2>
        <p>We are always hunting for great, off-market deals, to create wealth for our investors.</p>
      </div>
    </div>
    <div className='centered'>
      <a href='#slides'><button className='sec-btn'>Learn More</button></a>
    </div>
   </>
  )
}

export default About