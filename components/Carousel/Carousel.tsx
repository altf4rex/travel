'use client';

import { destinations } from "../../data";
import styles from './Carousel.module.scss';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegion } from 'features/regionSlice';
import type { RootState } from '../../store/configureStore';

export default function Carousel() {
  const activeRegion = useSelector((state: RootState) => state.region.data.region);
  const dispatch = useDispatch();

  const activeIndex = destinations.findIndex(dest => dest.region === activeRegion);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % destinations.length;
    dispatch(changeRegion(newIndex));
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + destinations.length) % destinations.length;
    dispatch(changeRegion(newIndex));
  };

  return (
    <div className={styles.carousel} data-testid="carousel">
      <div className={styles.carouselContainer}>
      <button onClick={prevSlide} className={styles.prevButton} aria-label="Previous slide">Up</button>
        {destinations.map((item, index) => {
          const position = index - activeIndex;
          return (
            <Link
              href={item.link}
              key={item.id}
              data-testid={item.name}
              className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ''}`}
              style={{
                transform: `translateY(${position * 120}%)`,
                opacity: index === activeIndex ? 1 : 0.5,
                transition: 'transform 0.7s ease, opacity 0.7s ease',
                zIndex: index === activeIndex ? 1 : 0,
              }}
            >
              <img 
                src={item.img} 
                alt={item.name}
                className={`${styles.carouselImage} ${index === activeIndex ? styles.active : ''}`} 
                style={{
                  transition: 'transform 0.7s ease, opacity 0.7s ease', 
                }}
              />
            </Link>
          );
        })}
        <button onClick={nextSlide} className={styles.nextButton} aria-label="Next slide">Down</button>
      </div>
      <div className={styles.textContainer}>
        <p>{destinations[activeIndex].name}</p>
      </div>
      
    </div>
  );
}
