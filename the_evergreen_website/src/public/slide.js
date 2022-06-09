import React , {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";

function Slides() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
    const slides = document.querySelectorAll('.slide');
    const back_arr = document.getElementById('back-arrow');
    const next_arr = document.getElementById('next-arrow');
    let index = 0;
    // let i = 0;

    const currentSlide = n => {
        for(var i = 0; i < slides.length; i++){
            slides[i].classList.remove('active');
        }
        slides[n].classList.add('active');
    }

    const prepareSlide = n => {
        currentSlide(n);
    }

    const nextSlide = () => {
        if(index == slides.length-1){
            index = 0;
            prepareSlide(index);
        }else{
            index++;
            prepareSlide(index);
        }
    }

    setInterval(nextSlide, 3000)

    const prevSlide = () => {
        if(index == 0){
            index = slides.length-1;
            currentSlide(index);
        }else{
            index--;
            currentSlide(index);
        }
    }

    // back_arr.addEventListener('click', prevSlide);
    // next_arr.addEventListener('click', nextSlide);

  return (
  <div className='row-slides' data-aos="fade-right">
    <div className='arrow-nav'>
        <FontAwesomeIcon icon={faArrowLeftLong} color='white' className='arrow-icons' style={{cursor: 'pointer'}} id='back-arrow'/>
    </div>

   <div className='slides'>
    <div className='slide active'>
        <h1>Who are we?</h1>
        <p>We are a self-storage investment company that works to maximize returns while minimizing risk. By offering investors stable, high-yielding properties with opportunities for capital appreciation and a variety of tax benefits, we can provide stability and growth in an unpredictable economy.</p>
    </div>
    <div className='slide'>
        <h1>What do we do?</h1>
        <p>At Evergreen we've taken the time to understand the self-storage sector and have designed a dynamic investment strategy that delivers outstanding returns and provides stability during economic downturns. We are confident that our investors will experience outstanding returns from our self-storage portfolio over time because of our appraisal-based transaction structure and low cap rate requirements.</p>
    </div>
    <div className='slide'>
        <h1>Our History</h1>
        <p>We've developed a unique investment approach that focuses on long-term "buy and hold" self-storage real estate, while also providing liquidity and appreciation. We own property in twelve markets across the United States, with an average occupancy rate of 95%. Our team has purchased over 1500 units since 2008. We look for stabilized properties near major metropolitan cities to insulate ourselves from risk, but we also enjoy the high returns associated with investing in dynamic markets like Austin and San Francisco. As our team has grown, so have our capabilities. In 2017 alone we purchased over $40 million dollars of property with zero debt. We're currently raising capital to pursue additional growth opportunities in 2018."</p>
    </div>
   </div>

   <div className='arrow-nav'>
        <FontAwesomeIcon icon={faArrowRightLong} color='white' className='arrow-icons' style={{cursor: 'pointer'}} id='next-arrow'/>   
    </div>
   </div>
  )
}

export default Slides