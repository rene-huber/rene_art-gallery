import Image from "next/image";
import useStore from "@/store";
import ArtPieces from "@/components/ArtPieces";

function ArtPiecesPage() {
    const { data } = useStore()

// console.log(data)

  return (
<>
<ArtPieces pieces={data} />
 
         
</>
   
  )
}

export default ArtPiecesPage