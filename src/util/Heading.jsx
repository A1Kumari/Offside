import React from 'react';
import styles from "./Heading.module.css"

function Heading({ heading, subheading }) {
  return (
    <div className={styles.heading}>
      <h3>{heading}</h3>
      <h5>{subheading}</h5>
    </div>
  );
}

export default Heading;
