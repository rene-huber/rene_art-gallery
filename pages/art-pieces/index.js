import Image from "next/image";
import useStore from "@/store";
import ArtPieces from "@/components/ArtPieces";

function ArtPiecesPage() {
    const { data } = useStore()

// console.log(data)

  return (
<>
<ArtPieces pieces={data} />
    {/* {data.map((piece, index) => (
        <li key={index}>
            <h2>{piece.name}</h2>
            <Image src={piece.imageSource} alt={piece.name} height={200} width={200} />
            <p>{piece.artist}</p>
        </li>
    ))} */}
         
</>
   
  )
}

export default ArtPiecesPage