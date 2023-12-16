import useStore from "@/store"

const FavoriteButton = ({ slug }) => {
  const { artPiecesInfo, setArtPiece } = useStore()
  const isFavorited = artPiecesInfo[slug]?.isFavorite || false

  console.log(isFavorited,"isFavorited", slug, artPiecesInfo)

  const handleFavorite = () => {
    setArtPiece(slug, !isFavorited)
  };

  return (
    <button onClick={handleFavorite}>
      {isFavorited ? 'fav' : 'no fav'}
    </button>
  );
};

export default FavoriteButton;
