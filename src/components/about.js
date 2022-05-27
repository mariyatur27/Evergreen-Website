import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
        const counters = document.querySelectorAll('metric-counter');

        for (var counter = 0; counter < counters.length; counter++){
          const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerHTML);
            console.log(target);
            console.log(count);
          }
          updateCount();
        }
 
    return (
        <div className='main-section'>
            <div className='slide' id='slide_1'>
                <div className='stat-box' style={{textAlign: 'center'}}>
                    <h1><span class='metric-counter' data-target='100'>0</span>+</h1>
                    <h3 style={{fontWeight: '100'}}>First Metric Description</h3>
                </div>

                <div className='stat-box' style={{textAlign: 'center'}}>
                    <h1><span class='metric-counter' data-target='100'>0</span>+</h1>
                    <h3 style={{fontWeight: '100'}}>First Metric Description</h3>
                </div>

                <div className='stat-box' style={{textAlign: 'center'}}>
                    <h1><span class='metric-counter' data-target='100'>0</span>+</h1>
                    <h3 style={{fontWeight: '100'}}>First Metric Description</h3>
                </div>
            </div>
        </div>
    )
}

export default About