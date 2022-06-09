import React , {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";

function Invest() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <>
    <div className='centered invest-sec' id="invest-sec" data-aos='fade-up'>
      <FontAwesomeIcon icon={faSackDollar} size='5x'/>
        <h1>Ready to Invest With Us?</h1>
        <button className='sec-btn'>Apply Today</button>
    </div>
   </>
  )
}

export default Invest