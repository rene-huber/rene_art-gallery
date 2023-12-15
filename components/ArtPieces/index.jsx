import Image from "next/image"
import Link from "next/link"



function ArtPieces({pieces}) {
   
  return (
    <div>
{pieces.map((piece, index) => (
    <li key={index}>
        <Link href={`/art-pieces/${piece.slug}`}>
      <h2>{piece.title}</h2>
      <Image src={piece.imageSource} alt={piece.name} width={200} height={200} />
      <p>{piece.artist}</p>
      </Link>
    </li>
    ))}

    </div>
  )
}

export default ArtPieces