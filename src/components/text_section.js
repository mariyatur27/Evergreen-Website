import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'

function Text() {

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '-2%'}} className='colored-div'>
            <div className='main content-centered' id='centered-text-section'>
            <FontAwesomeIcon icon={faMoneyBillTrendUp} sixe='lg' className='icons' size='8x' style={{marginBottom: '7%'}}/>
                <h1>Why Should You Invest with Cedar Creek Wealth?</h1>
                <h5>Cedar Creek wealth is a vertically integrated real estate private equity firm specializing in the acquisition, development, and management of self-storage facilities.  Cedar Creek Wealth drives shareholder values through operational synergies throughout our entities.</h5>
                <button className='main-btn' style={{marginTop: '4%'}}>Invest Today</button>
            </div>
        </div>
    )
}

export default Text