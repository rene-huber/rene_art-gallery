import ArtPieces from "@/components/ArtPieces";
import useStore from "@/store";

const FavoritesPage = () => {
  const { artPiecesInfo, data } = useStore();

  // Filtrar 'data' para obtener solo las piezas de arte favoritas
  // que tienen un 'slug' correspondiente en 'artPiecesInfo'
  const filteredFavoriteArtPieces = data.filter(artPiece => 
    artPiecesInfo[artPiece.slug] && artPiecesInfo[artPiece.slug].isFavorite
  );

  return (
    <div>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces pieces={filteredFavoriteArtPieces} />
    </div>
  );
};

export default FavoritesPage;
