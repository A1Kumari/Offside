import React from 'react';
import styles from './Progress.module.css'; // Import CSS file for styling

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progress_bar}>
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
