
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href='/'>
        <Image 
          src='/Logo.svg' 
          alt='Jpan Explorer' 
          width={93.5} 
          height={27.5} 
        />
      </Link>
      <Link href='/' className={styles.footer__button}>
        Back to Home Page
      </Link>
      <p>
        Some Text
      </p>
    </footer>
  );
}
