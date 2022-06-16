import React , {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";
import videoBg from '../assets/drone_video.mov'

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
    <video src={videoBg} autoPlay loop muted className='bg-video'/>
        <h1>Who Are We?</h1>
        <p>We are a self-storage investment company that works to maximize returns while minimizing risk. By offering investors stable, high-yielding properties with opportunities for capital appreciation and a variety of tax benefits, we can provide stability and growth in an unpredictable economy.</p>
    </div>
    <div className='slide'>
    <video src={videoBg} autoPlay loop muted className='bg-video'/>
        <h1>We Love Self-Storage!</h1>
        <p>We at Evergreen Wealth Partners pride ourselves on our ability to deliver market-beating returns on self-storage investments. With our background as real estate investors, we specialize in helping individual investors better diversify their portfolios with a safe and stable asset class: self-storage. </p>
    </div>
    <div className='slide'>
    <video src={videoBg} autoPlay loop muted className='bg-video'/>
        <h1>The Benefit of Focus</h1>
        <p>We are not your typical investment firm - we only invest in one thing: self-storage. By focusing primarily on one asset class, we improve our outcomes and reduce our risk. By focusing, we continually learn about how this asset class performs in a variety of environments - economically, politically, you name it. We use these insights to power our long-term investment strategy.</p>
    </div>
   </div>

   <div className='arrow-nav'>
        <FontAwesomeIcon icon={faArrowRightLong} color='white' className='arrow-icons' style={{cursor: 'pointer'}} id='next-arrow'/>   
    </div>
   </div>
  )
}

export default Slides