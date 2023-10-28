import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import styles from './styles.module.scss';

const PREV = 'assets/icon/prev.svg';
const NEXT = 'assets/icon/next.svg';

function CarouselWithAutoSlide({ cardData, CardComponent }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const interval = 5000; // 5 segundos

  const nextSlide = () => {
    if (currentSlide < cardData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, interval);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentSlide]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
    
        {cardData.map((data, index) => (
          <div
            key={index}
            className={`${styles.carouselCard} ${index === currentSlide ? styles.active : ''}`}
          >
          
            <CardComponent data={data} /> {/* Renderize o CardComponent passado como propriedade */}
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.controlButton}>
          <Image src={PREV} alt="Prev Icon" className="prev-icon" />
        </button>
        <div className={styles.indicators}>
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.activeIndicator : ''
              }`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className={styles.controlButton}>
          <Image src={NEXT} alt="Next Icon" className="next-icon" />
        </button>
      </div>
    </div>
  );
}

export default CarouselWithAutoSlide;
