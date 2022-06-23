import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faXmark } from '@fortawesome/free-solid-svg-icons'
//Importing AOS Animations
import AOS from "aos";
import "aos/dist/aos.css";

class Navbar extends React.Component {

  showMenu = (e) => {
    document.getElementById('menu-tab').classList.toggle('hide-obj');
    document.getElementById('menu-tab').classList.remove('ds-hide');
    var id = e.target.id;
    // document.getElementById(id).classList.add('hide-obj')
  }
  onClickOutside = (e) => {
    var element = document.getElementById('menu-tab');
    var clickOutside = element.contains(e.target);
    if (!clickOutside){
      console.log('outsideeee')
    }
  }
  render() {

    const closeMenu = () => {
      document.getElementById('menu-tab').classList.add('hide-obj')
    }
    return (
   <div className='navbar'>
    <li className='navbar-item'><a href='/#about-section'>About</a></li>
    {/* <li className='navbar-item'><a href='/team'>Team</a></li> */}
    <li className='navbar-item'><a href='/faq'>FAQ</a></li>
    {/* <li className='navbar-item'><a>Results</a></li> */}
    <li className='navbar-item'><a href='/contact'>Contact Us</a></li>
    <li className='navbar-item'><a>Investor Portal</a></li>
    <li className='navbar-item'><a href='/#invest-sec'>Become an Investor</a></li>
    <div className='navbar-mb' id='navbar-mb'>
      <FontAwesomeIcon icon={faEllipsisVertical} size='3x' color='white' id='menu-open' onClick={this.showMenu}/>
      <FontAwesomeIcon icon={faXmark} size='3x' color='white' class='hide-obj' id='menu-close'/>
    </div>
      <div className='menu-tab hide-obj ds-hide' id='menu-tab' onClick={this.onClickOutside}>
        <a href='/#about-section' onClick={closeMenu}><li className='menu-title-mb'>About</li></a>
        {/* <a href='/team' onClick={closeMenu}><li className='menu-title-mb'>Team</li></a> */}
        <a href='/faq' onClick={closeMenu}><li className='menu-title-mb'>FAQ</li></a>
        {/* <a href='' onClick={closeMenu}><li className='menu-title-mb'>Results</li></a> */}
        <a href='/contact' onClick={closeMenu}><li className='menu-title-mb'>Contact Us</li></a>
        <a href='' onClick={closeMenu}><li className='menu-title-mb'>Investor Portal</li></a>
        <a href='/#invest-sec' onClick={closeMenu}><li className='menu-title-mb'>Become an Investor</li></a>
      </div>
   </div>
  )
}
}

export default Navbar


  // const showMenu = () => {
  //   console.log('menu check')
  //   let menu_tab = document.createElement('div'); menu_tab.classList.add('menu-tab'); menu_tab.id = 'menu-tab';
  //     let menu_content = document.createElement('div'); menu_content.classList.add('menu-content');
  //       var links = ['/#about-section', '/team', '/faq', '', '/contact', '', '/#invest-sec'];
  //       var link_titles = ['About', 'Team', 'FAQ', 'Results', 'Contact Us', 'Investor Portal', 'Become an Investor'];
  //       const menu_obj = {};
  //       link_titles.forEach((element, index) => {menu_obj[element] = links[index]; });
  //       console.log(menu_obj);
  //       for(const ele in menu_obj){
  //         let menu_link = document.createElement('a'); menu_link.href = menu_obj[ele];
  //           let menu_title = document.createElement('li'); menu_title.innerHTML = ele; menu_title.classList.add('menu-title-mb');
  //           menu_link.appendChild(menu_title);
  //         menu_content.appendChild(menu_link);
  //       }
  //     menu_tab.appendChild(menu_content);
  //   document.body.appendChild(menu_tab);
  //   document.getElementById('menu-open').classList.toggle('hide-obj');
  //   document.getElementById('menu-close').classList.toggle('hide-obj');
  // }

  // const closeMenu = () => {
  //   document.getElementById('menu-tan').classList.add('hide-obj');
  // }