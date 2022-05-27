import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa5, faGem } from '@fortawesome/free-solid-svg-icons'
function Invest() {

    return (
        <div className='main'>
            <div className='centered-content' id="invest-section">
            <div className='centered-content' id='overlay-content' style={{color: 'white'}}>
                <FontAwesomeIcon icon={faGem} color="white" sixe='lg' className='icons' size='6x' style={{marginBottom: '4%'}}/>
                <h1 style={{zIndex: 2}}>Are you ready to invest with us?</h1>
                <button className='main-btn bottom-space' style={{color: 'black', backgroundColor:'white'}}>Apply Now!</button>
            </div>
            </div>
        </div>
    )
}

export default Invest