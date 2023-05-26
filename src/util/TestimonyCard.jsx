import React from 'react';
import styles from "./Testimony.module.css"
import Person1 from '../assets/images/Rectangle 35 (2).png';
import Person2 from '../assets/images/Rectangle 35 (3).png';


function CardList({ name, info }) {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.testimonyCard}>
            <div class={styles.testimonyfront}>
              
            </div>
            <div className={styles.back}>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>

          <div className={styles.testimonyCard}>
            <div class={styles.testimonyfront}>
              <img alt="Logo" src={Person1} className="d-inline-block align-top navbar-logo"/>
            </div>
            <div className={styles.back}>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>

          <div className={styles.testimonyCard}>
            <div class={styles.testimonyfront}>
              <img alt="Logo" src={Person1} className="d-inline-block align-top navbar-logo"/>
            </div>
            <div className={styles.back}>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>

          <div className={styles.testimonyCard}>
            <div class={styles.testimonyfront}>
              <img alt="Logo" src={Person1} className="d-inline-block align-top navbar-logo"/>
            </div>
            <div className={styles.back}>
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default CardList;
