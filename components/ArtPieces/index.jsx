import Image from "next/image"
import Link from "next/link"

function ArtPieces({ pieces, isFavorite }) {
  return (
    <ul>
      {pieces.map( piece => (
        <li key={piece.slug}>
          <Link href={`/art-pieces/${piece.slug}`}>
            <h2>{piece.title}</h2>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              width={200}
              height={200}
            />
            <p>{piece.artist}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArtPieces
