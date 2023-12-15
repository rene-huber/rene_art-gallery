import Image from "next/image"



function ArtPieces({pieces}) {
   
  return (
    <div>
{pieces.map((piece, index) => (
    <li key={index}>
      <h2>{piece.title}</h2>
      <Image src={piece.imageSource} alt={piece.name} width={200} height={200} />
      <p>{piece.artist}</p>
    </li>
    ))}

    </div>
  )
}

export default ArtPieces