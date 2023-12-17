import ArtPieces from "@/components/ArtPieces";
import useStore from "@/store";

const FavoritesPage = () => {
  const { artPiecesInfo, data } = useStore();


  const filteredFavoriteArtPieces = data.filter(artPiece => 
    artPiecesInfo[artPiece.slug] && artPiecesInfo[artPiece.slug].isFavorite
  );
// console.log(filteredFavoriteArtPieces, "filteredFavoriteArtPieces")
  return (
    <div>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces pieces={filteredFavoriteArtPieces} />
    </div>
  );
};

export default FavoritesPage;
