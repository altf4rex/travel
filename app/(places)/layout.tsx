import Footer from "@/components/Footer/Footer";
import styles from './PlacesLayout.module.scss';

export default function PlacesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
}