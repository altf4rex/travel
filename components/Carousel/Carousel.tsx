'use client';
import React, { useState, useEffect  } from 'react';
import { destinations } from "../../data";
import styles from './Carousel.module.scss';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/configureStore'
import { changeRegion } from 'features/regionSlice';
// Unhandled Runtime Error
// TypeError: Cannot read properties of null (reading 'removeChild')

// Call Stack
// Next.js

export type DestinationsCartProps = {
  id: number;
  img: string;
  name: string;
  link: string;
  region: string;
  descriptionHeader: string;
  descriptionText: string;
};


export default function Carousel(){

  const activeRegion = useSelector((state: RootState) => state.region.region)
  const dispatch = useDispatch();
  
  const [currentIndex, setCurrentIndex] = useState(6);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  // Update region when currentIndex changes
  useEffect(() => {
    dispatch(changeRegion(destinations[currentIndex].region))
  }, [currentIndex]);

  // Update currentIndex when activeRegion changes
  useEffect(() => {
    const activeIndex = destinations.findIndex(dest => dest.region === activeRegion);
    if (activeIndex !== -1 && activeIndex !== currentIndex) {
      setCurrentIndex(activeIndex);
    }
  }, [activeRegion]);

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.prevButton}>Up</button>
      <div className={styles.carouselContainer}>
        {destinations.map((item, index) => {
          const position = index - currentIndex;
          return (
            <Link
            href={item.link}
              key={item.id}
              className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
              style={{
                transform: `translateY(${position * 120}%) scale(${index === currentIndex ? 1 : 0.8})`,
                opacity: index === currentIndex ? 1 : 0.5,
                transition: 'transform 0.7s ease, opacity 0.5s ease',
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              <img src={item.img} alt={item.name} className={styles.carouselImage} />
              {index === currentIndex && <p>{item.name}</p>}
            </Link>
          );
        })}
      </div>
      <button onClick={nextSlide} className={styles.nextButton}>Down</button>
    </div>
  );
};
