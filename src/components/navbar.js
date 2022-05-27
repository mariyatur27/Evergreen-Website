import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed'>
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
      </nav>
    )
}

export default Navbar