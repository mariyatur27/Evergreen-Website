import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'

function Strategy() {

    return (
        <div className='main'>
            <div className='title'><h1>What We Do</h1></div>
            <div className='row2'>
              <div className='box-style-1'>
                  <FontAwesomeIcon icon={faBoxOpen} sixe='lg' className='icons' size='5x' style={{marginBottom: '15%'}}/>
                  <h3>Buy</h3>
                  <p>We repeat this strategy across all assets to turn lackluster facilities into market leaders.</p>
              </div>

              <div className='box-style-1'>
                  <FontAwesomeIcon icon={faBoxOpen} sixe='lg' className='icons' size='5x' style={{marginBottom: '15%'}}/>
                  <h3>Buy</h3>
                  <p>We repeat this strategy across all assets to turn lackluster facilities into market leaders.</p>
              </div>

              <div className='box-style-1'>
                  <FontAwesomeIcon icon={faBoxOpen} sixe='lg' className='icons' size='5x' style={{marginBottom: '15%'}}/>
                  <h3>Buy</h3>
                  <p>We repeat this strategy across all assets to turn lackluster facilities into market leaders.</p>
              </div>

              <div className='box-style-1'>
                  <FontAwesomeIcon icon={faBoxOpen} sixe='lg' className='icons' size='5x' style={{marginBottom: '15%'}}/>
                  <h3>Buy</h3>
                  <p>We repeat this strategy across all assets to turn lackluster facilities into market leaders.</p>
              </div>
            </div>
            <div className='centered-content'>
                <button className='main-btn'>Learn More</button>
            </div>
        </div>
    )
}

export default Strategy