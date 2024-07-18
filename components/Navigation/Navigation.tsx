import Link from "next/link";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store/configureStore";
import { changeRegion } from 'features/regionSlice';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const prev = useSelector((state: RootState) => state.region.data.prevRegion);
  const next = useSelector((state: RootState) => state.region.data.nextRegion);
  const index = useSelector((state: RootState) => state.region.data.id);
  const prevLink = `/${prev?.toLowerCase()}`;
  const nextLink = `/${next?.toLowerCase()}`;
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
        <nav>
          {prev && 
          <div className={styles.nav__container}>
            <img src="/Frame 91.svg" alt="" className={styles.nav__containerLeftImg}/>
            <div>
              <h4>{prev}</h4>
              {prevLink && <Link href={prevLink} onClick={() => dispatch(changeRegion(index - 2))}>Backward</Link>}
            </div>
          </div>
          }
          {next && 
          <div className={styles.nav__container}>
            <div>
              <h4>{next}</h4>
              {nextLink && <Link href={nextLink} onClick={() => dispatch(changeRegion(index))}>Forward</Link>}
            </div>
            <img src="/Frame 89.svg" alt="" className={styles.nav__containerRightImg}/>
          </div>
          }
        </nav>
    </div>

  )
}
