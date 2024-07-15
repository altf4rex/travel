'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/configureStore';
import { fetchDestination } from '../../features/placesSlice';
import Image from 'next/image';
import Link from 'next/link';
import styles from './destinationPage.module.scss';
import Navigation from '@/components/Navigation/Navigation';

export default function Page({ params }: { params: { destination: string } }) {
  const dispatch: AppDispatch = useDispatch();
  const arr = ["a", "b", "c", "d", "e",]
  // Вызов асинхронного действия при монтировании компонента
  useEffect(() => {
    dispatch(fetchDestination(params.destination));
    //console.log(params.destination)
  }, [dispatch, params.destination]);
  

  const nextRegion = useSelector((state: RootState) => state.region.data.nextRegion);
  const prevRegion = useSelector((state: RootState) => state.region.data.prevRegion);

  // Получение данных из состояния и состояния загрузки
  const place = useSelector((state: RootState) => state.destination.destination[0]);
  const loading = useSelector((state: RootState) => state.destination.loading);
  
  // Проверка состояния загрузки и отображение соответствующего контента
  if (loading === 'loading') {
    return <p>Loading...</p>;
  }

  if (loading === 'failed') {
    return <p>Error loading data</p>;
  }

  if (!place) {
    return <p>No data available</p>;
  }
  
  return (
    <div>
      <header className={styles.header}>
        <Image 
          src={place.img}
          alt={place.region}
          width={1920}
          height={580}
        />
        <Link href='/'>
          <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM19 7L1 7V9L19 9V7Z" fill="white"/>
          </svg>
          Back
        </Link>
        <h1>
          <span>{place.region}</span>, Japan
        </h1>
      </header>
      <main>
        <section>
          <div>
            <div>
              <h3>Overview</h3>
              <p>{place.overview}</p>
            </div>
            <Image 
              src={place.map}
              alt={place.region}
              width={254}
              height={399}
            />
          </div>
          <div>
            {
              place.topDestinations.map((d) => 
                <div key={d.name}>
                  <Image 
                    src={d.img}
                    alt={d.name}
                    width={710}
                    height={422}
                  />
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.description}</p>
                   </div>
                </div>
              )
            }
          </div>
        </section>
        <section className={styles.morePhotos}>
          <h3>More photos</h3>
          <div className={styles.morePhotos__grid}>
          {
            place.morePhotos.map((m, i) => 
              <img src={m} alt="" className={styles[`photo-${arr[i]}`]} key={m}/>
            )
          }
          </div>
        </section>
      </main>
      <Navigation />
    </div>
  );
}
