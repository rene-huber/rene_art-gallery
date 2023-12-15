import { useRouter } from "next/router"
import useStore from "@/store"
import ArtPieceDetails from "@/components/ArtPieceDetails"

function OneArtSelected() {
  const { data } = useStore()

  const router = useRouter()
  const { slug } = router.query

  const art = data.find((art) => art.slug === slug)
  if (!art) return <h1>Art not found</h1>

  return (
    <ArtPieceDetails
      image={art.imageSource}
      artist={art.artist}
      title={art.name}
      year={art.year}
      genre={art.genre}
    />
  );
}

export default OneArtSelected
