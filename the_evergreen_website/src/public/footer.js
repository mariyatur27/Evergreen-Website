import React from 'react'

function Footer() {
  return (
   <div className='footer'>
       <div className='links row middle' style={{width: '100%'}}>
            <li className='navbar-item'><a href='/#about-section'>About</a></li>
            {/* <li className='navbar-item'><a href='/team'>Team</a></li> */}
            <li className='navbar-item'><a href='/faq'>FAQ</a></li>
            {/* <li className='navbar-item'><a>Results</a></li> */}
            <li className='navbar-item'><a href='/contact'>Contact Us</a></li>
            <li className='navbar-item'><a>Investor Portal</a></li>
            <li className='navbar-item'><a href='/#invest-sec'>Become an Investor</a></li>
       </div>
       <div className='contact-info' style={{color: 'white'}}>
           <h3>2022 Evergreen Investment</h3>
           <a href='mailto:evergreenwealthpartners@gmail.com' style={{textDecoration: 'blink', color: 'white'}}><h4>Email: evergreenwealthpartners@gmail.com</h4></a>
           <a href='tel:+13195942647' style={{textDecoration: 'blink', color: 'white'}}><h4>Phone: 319-594-2647</h4></a>
       </div>
   </div>
  )
}

export default Footer