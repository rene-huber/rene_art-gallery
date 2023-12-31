import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import FavoriteButton from "../FavoriteButton"

function SpotLight({ image, artist, slug }) {
  const router = useRouter()
  return (
    <>
      <div>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} width={500} height={500} alt={slug} />
        </Link>
        <h2>{artist}</h2>
        <button onClick={()=> {router.back()}}>Back</button>

    
      </div>
        {/* <FavoriteButton slug={slug} /> */}
    </>
  );
}

export default SpotLight
