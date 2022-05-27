import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
      <nav className='navbar-expand-lg navbar-dark bg-dark footer'>
          <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'><a className='nav-link'>Home</a></li>
              <li className='nav-item'><a className='nav-link'>About</a></li>
              <li className='nav-item'><a className='nav-link'>Our Strategy</a></li>
              <li className='nav-item'><a className='nav-link'>FAQ</a></li>
              <li className='nav-item'><a className='nav-link'>Contact Us</a></li>
              <li className='nav-item'><a className='nav-link'>Investor Portal</a></li>
            </ul>
          </div>
          <div className='centered footer-content'>
             <h2>Evergreen Investment</h2><br></br>
             <h5>evergreen_email@gmail.com</h5>
             <h5>+1 (234) 5678-900</h5><br></br><br></br>
             <h6>Copyright Evergreen 2022 - All Rights Reserved</h6>
          </div>
      </nav>
    )
}

export default Footer