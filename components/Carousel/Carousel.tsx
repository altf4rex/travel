'use client';

import { destinations } from "../../data";
import styles from './Carousel.module.scss';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { changeRegion } from 'features/regionSlice';
import type { RootState } from '../../store/configureStore';

export default function Carousel() {
  const activeRegion = useSelector((state: RootState) => state.region.region);
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
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.prevButton}>Up</button>
      <div className={styles.carouselContainer}>
        {destinations.map((item, index) => {
          const position = index - activeIndex;
          return (
            <Link
              href={item.link}
              key={item.id}
              className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ''}`}
              style={{
                transform: `translateY(${position * 120}%) scale(${index === activeIndex ? 1 : 0.8})`,
                opacity: index === activeIndex ? 1 : 0.5,
                transition: 'transform 0.7s ease, opacity 0.5s ease',
                zIndex: index === activeIndex ? 1 : 0,
              }}
            >
              <img src={item.img} alt={item.name} className={styles.carouselImage} />
              {index === activeIndex && <p>{item.name}</p>}
            </Link>
          );
        })}
      </div>
      <button onClick={nextSlide} className={styles.nextButton}>Down</button>
    </div>
  );
}