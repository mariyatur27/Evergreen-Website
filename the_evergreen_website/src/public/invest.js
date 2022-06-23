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
        <a href='https://go.oncehub.com/SalesTeamPage-3ME9RBKLZA?bt=1' type='a_blank'><button className='sec-btn'>Schedule a Meeting Today</button></a>
        {/* <button id="SOIBTN_SalesTeamPage-3ME9RBKLZA" style="background: #006DAF; color: #ffffff; padding: 10px 20px; border: 1px solid #c8c8c8; font: bold 14px Arial; cursor: pointer;"  onclick='var soqueryparam = "https://go.oncehub.com//SalesTeamPage-3ME9RBKLZA?&bt=1"; if (window.location.href.indexOf("?") > 0) {   soqueryparam += "&"+window.location.href.slice(window.location.href.indexOf("?") + 1);}window.open(soqueryparam)' >Schedule an Appointment</button> */}
    </div>
   </>
  )
}

export default Invest