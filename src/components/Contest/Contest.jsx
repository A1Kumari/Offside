import React, { useState } from "react";
import Card from "../../util/Card";
import Heading from "../../util/Heading";
import styles from './Contest.module.css';
import ReverseFantasy from '../../assets/images/ReverseFantasy.jpg';
import Prediction from '../../assets/images/Prediction.jpg';
import Quizes from '../../assets/images/Quizes.jpg';


function Contest() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.background}>
      <Heading
        heading="Winning is the best feeling in the world, but the thrill of the contest is even better"
        subheading="A place that makes conversations as memorable as the matches."
      />

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div onClick={() => handleOptionClick("quizzes")} className={styles.containerBox}>
            <h4>Quizzes</h4>
            <p>Play daily quizzes</p>
          </div>
          <div onClick={() => handleOptionClick("reverseFantasy")} className={styles.containerBox}>
            <h4>Reverse Fantasy</h4>
            <p>Play daily quizzes</p>
          </div>
          <div onClick={() => handleOptionClick("predictions")} className={styles.containerBox}>
            <h4>Predictions</h4>
            <p>Play daily quizzes</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          {selectedOption === "quizzes" && <img src={Quizes} alt="Quizzes" className={styles.img} />}
          {selectedOption === "reverseFantasy" && <img src={Prediction} alt="Reverse Fantasy" className={styles.img} />}
          {selectedOption === "predictions" && <img src={ReverseFantasy} alt="Predictions" className={styles.img} />}
        </div>
      </div>
    </div>
  );
}

export default Contest;
