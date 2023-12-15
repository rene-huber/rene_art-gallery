import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

function SpotLight({ image, title, artist, year, genre }) {
  const router = useRouter()
  return (
    <>
      <div>
  
          <Image src={image} width={500} height={500} alt={artist} />
     
        <h2>{artist}</h2>
        <h2>{title}</h2>
        <h2>{year}</h2>
        <h2>{genre}</h2>

<button onClick={()=> {router.back()}}>Back</button>
        
        {/* <FavoriteButton
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        ></FavoriteButton> */}
      </div>
    </>
  );
}

export default SpotLight
