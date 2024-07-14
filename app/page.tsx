import Carousel from '@/components/Carousel/Carousel';
import Map from '@/components/Map/Map';
import styles from './page.module.scss';

export default function Home() {

  return (
    <div className={styles.main}>
      <Carousel />
      <Map />
    </div>
  );
}
