import React from "react";
import styles from './Footer.module.css'
import Connect from "./Connect";
import AppStoreLogo from '../../assets/images/App_Store-Badge.svg';
import PlayStoreLogo from '../../assets/images/Google_Play-Badge.svg';
import OffsideLogo from '../../assets/images/offsideblue.svg';

const Footer = ()=>{
    return (
        <>
        <Connect/>
        <div className={styles.blackBackground}>
            <h1 className={styles.bold}>Get your own commentary <br/>box with friends on Offside!</h1>
            <span>21k+ DOWNLOADS</span>
            <div className={styles.social}>
                <img alt="Logo" src={AppStoreLogo} className={`${styles.logo} ${styles.AppStoreLogo}`}/>
                <img alt="Logo" src={PlayStoreLogo} className={`${styles.logo} ${styles.PlayStoreLogo}`}/>
            </div>
            <div className={styles.lastPart}>
                <h4>Firkle sports India Pvt. Ltd.</h4>
                <img alt="offsideLogo" src={OffsideLogo} className={styles.offsideLogo}/>
                <h4><a>Terms and Conditions</a></h4>
            </div>
        </div>
        </>
    )
}

export default Footer;