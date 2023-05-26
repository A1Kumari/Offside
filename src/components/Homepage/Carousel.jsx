import React, { useState, useEffect } from 'react';
import img1 from '../../assets/images/Gamehub_phone_3.svg';
import img2 from '../../assets/images/Gamehub_phone_2.svg';
import img3 from '../../assets/images/Gamehub_phone_1.svg';
import styles from './Carousel.module.css';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const cards = [
    { id: "1", image: img1 },
    { id: "2", image: img2 },
    { id: "3", image: img3 }
  ];

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => mod(prevIndex + 1, cards.length));
    }, 3000); // Change the duration (in milliseconds) to adjust the slide interval

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.slider_container}>
      <div className={styles.carousel}>
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);

          return (
            <div key={item.id} className={`${styles.card} ${styles.swiper_slide}`}>
              <img src={item.image} alt='' className={i === index ? styles.card_active : i === indexLeft ? styles.card_left : styles.card_right} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
