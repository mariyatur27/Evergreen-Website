import React , {useEffect} from 'react'
import { reasons } from './data/reasons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from "aos";
import "aos/dist/aos.css";

function Reasons() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
   <div className='reasons-sec'>
    <h1 className='centered' style={{color: 'white'}} data-aos="fade-right">Why Is Self-Storage A Great Investment?</h1>
    <div className='row-3 middle' data-aos="zoom-in">
        {reasons.map((data, key) => {
            return(
                <div className='reason-box' key={key}>
                    <FontAwesomeIcon icon={data.icon} size='4x'/>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            );
        })}
    </div>
   </div>
  )
}

export default Reasons