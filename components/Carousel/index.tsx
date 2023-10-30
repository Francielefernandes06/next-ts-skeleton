import React from 'react';
import Image from 'react-bootstrap/Image';

import styles from './styles.module.scss';

const PREV = 'assets/icon/prev.svg';
const NEXT = 'assets/icon/next.svg';

function CarouselWithAutoSlide({ cardData, CardComponent }) {
  
  return (
    <div id="carouselExampleCaptions" className="carousel slide mt-5">
    
    <div className="carousel-inner">
      {cardData.map((data, index) => (
        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index} data-bs-interval="10000">
          <CardComponent data={data} />
        </div>
      ))}
    </div>
    <div className={styles.controls}>
      <button className="carousel-control-prev" style={{ position: 'inherit', opacity: 1,}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="false"  style={{ color: 'black' }}>
          <Image src={PREV} alt="Prev Icon" className="prev-icon" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <div className="carousel-indicators"  style={{
           
           marginBottom : 0,
            bottom: 'auto',    }
          }>
      {cardData.map((_, index) => (
        <button
          key={index}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "black",
            
          }
           
          }
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-current={index === 0 ? "true" : "false"}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
      <button className="carousel-control-next" style={{ position: 'inherit', opacity: 1,}}type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" style={{ color: 'black' }} aria-hidden="false">
          <Image src={NEXT} alt="Next Icon" className="next-icon" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

    // <div className={styles.carouselContainer}>
    //   <div className={styles.carousel}>
    
    //     {cardData.map((data, index) => (
    //       <div
    //         key={index}
    //         className={`${styles.carouselCard} ${index === currentSlide ? styles.active : ''}`}
    //       >
          
    //         <CardComponent data={data} /> {/* Renderize o CardComponent passado como propriedade */}
    //       </div>
    //     ))}
    //   </div>
    //   <div className={styles.controls}>
    //     <button onClick={prevSlide} className={styles.controlButton}>
    //       <Image src={PREV} alt="Prev Icon" className="prev-icon" />
    //     </button>
    //     <div className={styles.indicators}>
    //       {cardData.map((_, index) => (
    //         <div
    //           key={index}
    //           className={`${styles.indicator} ${
    //             index === currentSlide ? styles.activeIndicator : ''
    //           }`}
    //         />
    //       ))}
    //     </div>
    //     <button onClick={nextSlide} className={styles.controlButton}>
    //       <Image src={NEXT} alt="Next Icon" className="next-icon" />
    //     </button>
    //   </div>
    // </div>
  );
}

export default CarouselWithAutoSlide;



