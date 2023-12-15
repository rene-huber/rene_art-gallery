import { useRouter } from "next/router"
import useStore from "@/store"
import ArtPieceDetails from "@/components/ArtPieceDetails"

function OneArtSelected() {
  const { data } = useStore()

  const router = useRouter()
  const { slug } = router.query

  const selectedArt = data.find((art) => art.slug === slug)
  if (!selectedArt) return <h1>Art not found</h1>

  return (
    <ArtPieceDetails
      image={selectedArt.imageSource}
      artist={selectedArt.artist}
      title={selectedArt.name}
      year={selectedArt.year}
      genre={selectedArt.genre}
    />
  );
}

export default OneArtSelected
