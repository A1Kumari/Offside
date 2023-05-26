import React from "react";
import styles from './Card.module.css'; 
import { AiOutlineArrowRight } from 'react-icons/ai';

const Card = ({heading, info}) =>{
    return(
        <>
        <div className={styles.grid}>
            <div className={styles.card}>
                <h3 className={styles.heading}>{heading}</h3>
                <p className={styles.info}>{info}</p>
                <div className={styles.leftArrow}><AiOutlineArrowRight className={styles.icon}/></div>
            </div>

            <div className={styles.card}>
                <h3 className={styles.heading}>{heading}</h3>
                <p className={styles.info}>{info}</p>
                <div className={styles.leftArrow}><AiOutlineArrowRight className={styles.icon}/></div>
            </div>

            <div className={styles.card}>
                <h3 className={styles.heading}>{heading}</h3>
                <p className={styles.info}>{info}</p>
                <div className={styles.leftArrow}><AiOutlineArrowRight className={styles.icon}/></div>
            </div>

        
        </div>
        </>
    )
}

export default Card;