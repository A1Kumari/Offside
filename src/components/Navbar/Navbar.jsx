import React from 'react';

import LogoNavbar from '../../assets/images/offside_logo_main.svg';
import AppStoreLogo from '../../assets/images/App_Store-Badge.svg';
import PlayStoreLogo from '../../assets/images/Google_Play-Badge.svg';
import OffsideLogo from '../../assets/images/offsideblue.svg'
import constants from '../../util/constants';
import Typography from '../../util/Typography';
import StoreLogos from '../../util/StoreLogos';
import Insta from '../../assets/images/InstagramOctDen.png';
import styles from './Navbar.css';

const NavBar = () => {
    return (
        <section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">
        <img src={OffsideLogo} alt="offside logo"/>
      </a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="#!">Contact Us</a>
        </li>
        
        <li>
          <a>  <img alt="Logo" src={Insta} className="navLogo"/></a>
        </li>
        <li>
          <a>  <img alt="Logo" src={AppStoreLogo} className="navLogo"/></a>
        </li>
        <li>
          <a><img alt="Logo" src={PlayStoreLogo} className="navLogo"/></a>
        </li>
        <li>
          <a href="#!">
            <div className='Downloadsbtn'>21k+ Downloads</div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>
    );
};

export default NavBar;