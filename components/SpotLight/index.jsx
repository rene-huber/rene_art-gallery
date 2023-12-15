import Image from "next/image";
import Link from "next/link";

function SpotLight({ image, artist, slug }) {
  return (
    <>
      <div>
        <Link href={`/art-pieces/${slug}`}>
          <Image src={image} width={500} height={500} alt={artist} />
        </Link>
        <h2>{artist}</h2>
        {/* <FavoriteButton
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        ></FavoriteButton> */}
      </div>
    </>
  );
}

export default SpotLight;
