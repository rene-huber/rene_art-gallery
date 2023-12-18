import { useRouter } from "next/router"
import useStore from "@/store"
import style from "./artPieces.module.css"
import ArtPieceDetails from "@/components/ArtPieceDetails"
import Comments from "@/components/Comments"
import GradientBalls from "@/components/GradientColors"


function OneArtSelected() {
  const { data } = useStore()

  const router = useRouter()
  const { slug } = router.query

  const art = data.find((art) => art.slug === slug)
  if (!art) return <h1>Art not found</h1>
  
  console.log(data,"jjgjgjgjgjgjg");
  
  return (
    
<main className={style.onePiece} >
<GradientBalls colors={art.colors || []} />

<ArtPieceDetails
      image={art.imageSource}
      artist={art.artist}
      title={art.name}
      year={art.year}
      genre={art.genre}
      slug={art.slug}
    />
<Comments slug={art.slug} />
</main>
  );
}

export default OneArtSelected
