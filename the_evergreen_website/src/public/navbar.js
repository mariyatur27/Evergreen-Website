import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";
function Navbar() {

  const showMenu = () => {
    console.log('menu check')
    let menu_tab = document.createElement('div'); menu_tab.classList.add('menu-tab'); menu_tab.id = 'menu-tab';
      let menu_content = document.createElement('div'); menu_content.classList.add('menu-content');
        var links = ['/#about-section', '/team', '/faq', '', '/contact', '', '/#invest-sec'];
        var link_titles = ['About', 'Team', 'FAQ', 'Results', 'Contact Us', 'Investor Portal', 'Become an Investor'];
        const menu_obj = {};
        link_titles.forEach((element, index) => {menu_obj[element] = links[index]; });
        console.log(menu_obj);
        for(const ele in menu_obj){
          let menu_link = document.createElement('a'); menu_link.href = menu_obj[ele];
          // menu_link.addEventListener('click', hideMenu());
            let menu_title = document.createElement('li'); menu_title.innerHTML = ele; menu_title.classList.add('menu-title-mb');
            menu_link.appendChild(menu_title);
          menu_content.appendChild(menu_link);
        }
      menu_tab.appendChild(menu_content);
    document.body.appendChild(menu_tab);
  }
 
  return (
   <div className='navbar'>
    <li className='navbar-item'><a href='/#about-section'>About</a></li>
    <li className='navbar-item'><a href='/team'>Team</a></li>
    <li className='navbar-item'><a href='/faq'>FAQ</a></li>
    {/* <li className='navbar-item'><a>Results</a></li> */}
    <li className='navbar-item'><a href='/contact'>Contact Us</a></li>
    <li className='navbar-item'><a>Investor Portal</a></li>
    <li className='navbar-item'><a href='/#invest-sec'>Become an Investor</a></li>
    <div className='navbar-mb' id='navbar-mb' onClick={showMenu}>
      <FontAwesomeIcon icon={faEllipsisVertical} size='3x' color='white'/>
    </div>
   </div>
  )
}

export default Navbar