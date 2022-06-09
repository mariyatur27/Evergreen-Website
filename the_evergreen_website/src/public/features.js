import React , {useEffect} from 'react'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";


function Features() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <>
    <div className='row text-section'>
      <div className='img-box' id='img-box-1'></div>
      <div className='text-box' data-aos="fade-up">
          <h1>Why Should You Invest with Evergreen Wealth Partners?</h1>
          <p>With our extensive experience and background as real estate investors, we specialize in helping individual investors better diversify their portfolio with a safe and stable asset class: self-storage. We are not your typical investment firm - we only invest in one thing: self-storage. By focusing primarily on one asset class, we've learned an incredible amount about how this asset class performs in a variety of environments - economically, politically, you name it. We use these insights to power our long-term investment strategy</p>
      </div>
      <div className='img-box' id='img-box-2'></div>
    </div>
   </>
  )
}

export default Features
