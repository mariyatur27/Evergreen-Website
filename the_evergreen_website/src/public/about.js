import React , { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
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
    <div className='row middle'>
      <div className='abt-box' data-aos="fade-up">
        <FontAwesomeIcon icon={faBasketShopping} size='3x'/>
        <h2>Solid Returns</h2>
        <p>At Evergreen Wealth Partners, we generate solid returns and stable cashflow through self-storage investments.</p>
      </div>
      <div className='abt-box' data-aos="fade-up">
        <FontAwesomeIcon icon={faBasketShopping} size='3x'/>
        <h2>Value</h2>
        <p>We are a boutique firm that seeks to create extraordinary value for our shareholders by doing nothing too crazy.</p>
      </div>
      <div className='abt-box' data-aos="fade-up">
        <FontAwesomeIcon icon={faBasketShopping} size='3x'/>
        <h2>Great Deals</h2>
        <p>We find great deals, stabilize them, create massive value for our shareholders, and repeat the process over and over again while minimizing risk at every turn.</p>
      </div>
      <div className='abt-box' data-aos="fade-up">
        <FontAwesomeIcon icon={faBasketShopping} size='3x'/>
        <h2>Competitive Advantage</h2>
        <p>We at Evergreen Wealth Partners pride ourselves on our ability to deliver market-beating returns on self-storage investments.</p>
      </div>
    </div>
    <div className='centered'>
      <button className='sec-btn'>Learn More</button>
    </div>
   </>
  )
}

export default About