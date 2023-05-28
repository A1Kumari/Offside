import React from "react";
import styles from "./Rewards.module.css"
import lounge from '../../assets/images/Lounge.jpg';
import Heading from "../../util/Heading";
import ProgressBar from "../../util/ProgressBar.js";
import OffsideLogo from '../../assets/images/offsideblue.svg';
import Rewards1 from "../../assets/images/Rectangle 35 (1).png";
import Rewards2 from "../../assets/images/Rectangle 3282.jpg";
import PhoneCase from "../../assets/images/phoneScreen (1).png";
import Coin from "../../assets/images/coin2 9.png";
import offsideCoin from "../../assets/images/Union.png";
import Phone from "../../assets/images/phonecase.png";
import Star3 from "../../assets/images/Star 3.png";
import Star1 from "../../assets/images/Star 1.png";
import Star2 from "../../assets/images/Star 2.png";
import Voucher from "../../assets/images/image 13.png";
import Shoes from "../../assets/images/shoes 1.png";
import Watch from "../../assets/images/smart watch 1.png";

const Rewards = () =>{
  const progress = 75;
    return(
        <>
        <div className={styles.RewardSection}>
          <div className={styles.leftSection}>
            <div className={styles.Rewardbox}>
              <div className={styles.centered}>
                <img src={OffsideLogo} />
                <h3>Referral rewards</h3>
              </div>
              <div className={styles.inLine}>
                <p>5 Users can earn an Amazon gift 
                card worth INR. 200 for each 
                successful referral, and 5
                new users can earn an Amazon 
                gift card worth INR. 100 daily.</p>
                <img src={Voucher}/>
              </div>
             <div className={styles.bar}></div>
            </div>

            <div className={styles.Rewardbox}>
              <div className={styles.centered}>
                <img src={OffsideLogo} />
                <h3>Referral rewards</h3>
              </div>
              <div className={styles.inLine}>
                <p>5 Users can earn an Amazon gift 
                card worth INR. 200 for each 
                successful referral, and 5
                new users can earn an Amazon 
                gift card worth INR. 100 daily.</p>
                <img src={Watch}/>
              </div>
             <div className={styles.bar}></div>
            </div>
      </div>
          <div className={styles.middleSection}>
            <img src={Phone}/>
          </div>
          
          <div className={styles.rightSection}>
              <div className={styles.rewards_img}>
                <img src={Rewards1}/>
              </div>
              <div className={styles.rewards_img}>
                <img src={Rewards2}/>
              </div>
          </div>
        </div>
        </>
    )
}

export default Rewards;

/*import React from "react";
import Heading from "../../util/Heading";
import styles from "./Rewards.module.css"

const Rewards = () =>{
    return(
        <>
         <div className={styles.rewardBox}>
         <Heading heading="How to earn Rewards" subheading="A place that makes conversations as memorable as the matches."/>
            <div className={styles.leftRight}>
              <img></img>
              <div className={styles.downDropDowm}>
                <downDropDownBox></downDropDownBox>
              </div>
            </div>
            <Heading heading="Winning is the best feeling in the world, but the thrill of the contest is even better" subheading="A place that makes conversations as memorable as the matches."/>
            <div className={styles.imgSection}>
              <div className={styles.rewardsimg}>
                <img/>
                <p>info</p>
              </div>

              <div className={styles.rewardsimg}>
                <img/>
                <p>info</p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Rewards;*/