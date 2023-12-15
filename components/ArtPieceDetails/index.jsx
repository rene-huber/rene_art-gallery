import Image from "next/image"
import Link from "next/link"

function SpotLight({ image, title, artist, year, genre }) {
  return (
    <>
      <div>
  
          <Image src={image} width={500} height={500} alt={artist} />
     
        <h2>{artist}</h2>
        <h2>{title}</h2>
        <h2>{year}</h2>
        <h2>{genre}</h2>


        
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
