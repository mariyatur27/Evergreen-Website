import React from 'react'

function Navbar() {
  return (
   <div className='navbar'>
    <li className='navbar-item'><a href='/#about-section'>About</a></li>
    <li className='navbar-item'><a href='/team'>Team</a></li>
    <li className='navbar-item'><a href='/faq'>FAQ</a></li>
    <li className='navbar-item'><a>Results</a></li>
    <li className='navbar-item'><a href='/contact'>Contact Us</a></li>
    <li className='navbar-item'><a>Investor Portal</a></li>
    <li className='navbar-item'><a href='/#invest-sec'>Become an Investor</a></li>
   </div>
  )
}

export default Navbar