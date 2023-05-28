import React, { useState } from "react";
import Card from "../../util/Card";
import Heading from "../../util/Heading";
import styles from './Contest.module.css';
import ReverseFantasy from '../../assets/images/fantasy.png';
import Prediction from '../../assets/images/prediction.png';
import Quizes from '../../assets/images/quizzes.png';


function Contest() {
  const [selectedOption, setSelectedOption] = useState("quizzes");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  return (
    <div className={styles.background}>
      <Heading
        heading="Non-money contests"
        subheading="Contests are the best way to earn rewards and enjoy the platform"
      />
  
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div
            onClick={() => handleOptionClick("quizzes")}
            className={`${styles.containerBox} ${selectedOption === "quizzes" ? styles.selectedOption : ""}`}
          >
            <h1>Quizzes</h1>
            <p>Play daily quizzes</p>
          </div>
          <div
            onClick={() => handleOptionClick("reverseFantasy")}
            className={`${styles.containerBox} ${selectedOption === "reverseFantasy" ? styles.selectedOption : ""}`}
          >
            <h1>Reverse Fantasy</h1>
            <p>Play daily quizzes</p>
          </div>
          <div
            onClick={() => handleOptionClick("predictions")}
            className={`${styles.containerBox} ${selectedOption === "predictions" ? styles.selectedOption : ""}`}
          >
            <h1>Predictions</h1>
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
