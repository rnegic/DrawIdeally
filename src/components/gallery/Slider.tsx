import React from "react";
import styles from "./slider.module.css";
import Image from "next/image";

const Slider = () => {

  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg',
    '/images/art6.jpg',
  ];

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <Image src={image} alt="art" className={styles.img} quality={45} width={300} height={300} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;