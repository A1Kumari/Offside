import React from "react";
import styles from './Footer.module.css';
import Insta from '../../assets/images/InstagramOctDen.png';
import Twitter from '../../assets/images/TwitterOctDen.png';
import AppStoreLogo from '../../assets/images/App_Store-Badge.svg';
import PlayStoreLogo from '../../assets/images/Google_Play-Badge.svg';

const Connect = ()=>{
    return (
        <>
        <div className={styles.connectWith}>
            <div className={styles.connectHeading}>
                <h1>Stay connected with <br/> the community</h1>
                <h3>We can’t wait to see you there!</h3>
            </div> 
            <div className={styles.connectSocial}>
                <img alt="Logo" src={Twitter} className={styles.twitter}/>
                <img alt="Logo" src={Insta} className={styles.insta}/>
            </div>                       
        </div>
        </>
    )
}

export default Connect;