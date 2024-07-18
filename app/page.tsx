import Carousel from '@/components/Carousel/Carousel';
import Map from '@/components/Map/Map';
import styles from './page.module.scss';
import ModalDescription from '@/components/ModalDescription/ModalDescription';

export default function Page() {

  return (
    <div className={styles.main}>
      <Carousel />
      <Map />
      <ModalDescription/>
    </div>
  );
}
