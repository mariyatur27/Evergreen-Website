import React from 'react'

function Footer() {
  return (
   <div className='footer'>
       <div className='links row middle' style={{width: '100%'}}>
            <li className='navbar-item'><a>About</a></li>
            <li className='navbar-item'><a>FAQ</a></li>
            <li className='navbar-item'><a>Results</a></li>
            <li className='navbar-item'><a>Contact Us</a></li>
            <li className='navbar-item'><a>Investor Portal</a></li>
            <li className='navbar-item'><a>Become an Investor</a></li>
       </div>
       <div className='contact-info' style={{color: 'white'}}>
           <h3>2022 Evergreen Investment</h3>
           <a href='mailto:' style={{textDecoration: 'blink', color: 'white'}}><h4>Email: someemail@evergreen.com</h4></a>
           <a href='tel:' style={{textDecoration: 'blink', color: 'white'}}><h4>Phone: 123-345-6789</h4></a>
       </div>
   </div>
  )
}

export default Footer