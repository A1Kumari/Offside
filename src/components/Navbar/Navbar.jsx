import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import LogoNavbar from '../../assets/images/offside_logo_main.svg';
import AppStoreLogo from '../../assets/images/App_Store-Badge.svg';
import PlayStoreLogo from '../../assets/images/Google_Play-Badge.svg';
import OffsideLogo from '../../assets/images/offsideblue.svg'
import constants from '../../util/constants';
import Typography from '../../util/Typography';
import StoreLogos from '../../util/StoreLogos';
import Insta from '../../assets/images/InstagramOctDen.png';
import styles from './Navbar.module.css';

const NavBar = () => {
    return (
        <section className={styles.navigation}>
  <div className={styles.nav_container}>
    <div className={styles.brand}>
      <a href="#!">
        <img src={OffsideLogo} alt="offside logo"/>
      </a>
    </div>
    <nav>
      <div className={styles.nav_mobile}><a id="navbar-toggle" href="#!"><span></span></a></div>
      <ul className={styles.nav_list}>
        <li>
          <a>  <img alt="Logo" src={Insta} className={styles.navLogoInsta}/></a>
        </li>
        <li>
            <div className={styles.SocialMedia}>
                <a><img src={PlayStoreLogo} className={styles.navLogo}/></a>
            </div>
        </li>
        <li>
            <div className={styles.SocialMedia}>
              <a><img src={AppStoreLogo} className={styles.navLogo}/></a>
            </div>
        </li>
        <li>
          <a href="#!">
            <div className={styles.Downloadsbtn}>21k+ Downloads</div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</section>
    );
};

export default NavBar;