"use client"

import React, { useState } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import Map from '@/components/Map/Map';
import styles from './page.module.scss';

export default function Home() {
  const [activeRegion, setActiveRegion] = useState("kanto");

  return (
    <div className={styles.main}>
      <Carousel 
        activeRegion={activeRegion} 
        onRegionChange={setActiveRegion} 
      />
      <Map 
        activeRegion={activeRegion} 
        onRegionHover={setActiveRegion} 
      />
    </div>
  );
}
