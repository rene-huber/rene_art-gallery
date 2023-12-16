import ArtPieces from "@/components/ArtPieces"
import useStore from "@/store"

const FavoritesPage = () => {
  const { artPiecesInfo } = useStore()

  const favoriteArtPieces = Object.entries(artPiecesInfo).reduce(
    (favorites, [slug, artPiece]) => {
      if (artPiece.isFavorite) {
        favorites.push({ ...artPiece, slug })
      }
      return favorites
    },
    []
  );
console.log(favoriteArtPieces,"favoriteArtPieces")
  //   const favoriteArtPieces = Object.entries(artPiecesInfo)
  //     .filter(([_, artPiece]) => artPiece.isFavorite)
  //     .map(([slug, artPiece]) => ({ ...artPiece, slug }));


  return (
    <div>
      <h1>Favorite Art Pieces</h1>
      {/* <ArtPieces pieces={favoriteArtPieces}  /> */}

      <h1>{favoriteArtPieces[0].slug}</h1>
    </div>
  );
};

export default FavoritesPage
