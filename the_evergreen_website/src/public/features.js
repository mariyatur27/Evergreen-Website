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
          <h1>WHY INVEST WITH EVERGREEN WEALTH PARTNERS?</h1>
          <p>Seeking stable, lower-than-market risk investments? We get it. That's why Evergreen works with carefully selected self-storage facilities in proven neighborhoods and creates a stable investment vehicle that minimizes risk while maximizing returns. Our investors receive all the benefits of real estate's best asset class: self storage. Stability, recession-resistance, high performance, great cash flow and strong appreciation are just a few of these benefits. And you won't lose any sleep worrying about your investment when you work with Evergreen. We keep our investors in the loop with quarterly updates while letting you do what you do best: live your life on your terms.</p>
      </div>
      <div className='img-box' id='img-box-2'></div>
    </div>
   </>
  )
}

export default Features
