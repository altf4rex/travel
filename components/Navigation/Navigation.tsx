import Link from "next/link";
import { useSelector } from "react-redux"
import { RootState } from "store/configureStore";

export default function Navigation() {
  const prev = useSelector((state: RootState) => state.region.data.prevRegion);
  const next = useSelector((state: RootState) => state.region.data.nextRegion);
  const prevLink = `/${prev?.toLowerCase()}`;
  const nextLink = `/${next?.toLowerCase()}`;
  return (
    <div>
        <nav>
          {prev && 
          <div>
            <img src="" alt="" />
            <div>
              <h4>{prev}</h4>
              {prevLink && <Link href={prevLink}>Backward</Link>}
            </div>
          </div>
          }
          {next && 
          <div>
            <img src="" alt="" />
            <div>
              <h4>{next}</h4>
              {nextLink && <Link href={nextLink}>Forward</Link>}
            </div>
          </div>
          }
        </nav>
    </div>

  )
}
