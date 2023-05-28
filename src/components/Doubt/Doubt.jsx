import React from "react";
import styles from './Doubt.module.css';
import lounge from '../../assets/images/Lounge.jpg';
import HalfPhone from '../../assets/images/halfPhone.png';
import Heading from "../../util/Heading";

const Doubt = () =>{
    return(
        <>
        <Heading heading="I have a question about [insert topic]" subheading="A place that makes consversation as memorable as the matches"/>
        <div className={styles.grid}>
          <div className={styles.cell1}>
            <div className={styles.heading}>
              <h3>Public Groups</h3>
              <p>A place that makes conversations as memorable as the matches.</p>
            </div>
            <div className={styles.image}>
              <img alt="Logo" src={HalfPhone} className={`${styles.half_img} ${styles.bottom}`}/>
            </div>
          </div>
          <div className={styles.cell2}>
          <div className={styles.heading}>
              <h3>Private Groups</h3>
              <p>A place that makes conversations as memorable as the matches.</p>
            </div>
            <div className={styles.image}>
              <img alt="Logo" src={HalfPhone} className={`${styles.half_img} ${styles.more_bottom}`}/>
            </div>
          </div>
          <div className={styles.cellLong}>
            <div className={styles.heading}>
              <h3>Lounge</h3>
              <p>A place that makes conversations as memorable as the matches.</p>
            </div>
            <div className={styles.image}>
              <img alt="Logo" src={lounge} className={styles.lounge_img}/>
            </div>
          </div>
        </div>
        <div className={styles.video}>
        <iframe
      width="1300"
      height="600"
      src={`https://www.youtube.com/embed/lMJWsYZU2wY`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        </div>
        </>
    )
}

export default Doubt;