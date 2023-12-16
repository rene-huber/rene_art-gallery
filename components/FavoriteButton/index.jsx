import useStore from "@/store"

const FavoriteButton = ({ slug }) => {
  const { artPiecesInfo, setArtPieceFavorite } = useStore()
  const isFavorited = artPiecesInfo[slug]?.isFavorite || false

  console.log(isFavorited,"isFavorited", slug, artPiecesInfo)

  const handleFavorite = () => {
    setArtPieceFavorite(slug, !isFavorited)
  };

  return (
    <button onClick={handleFavorite}>
      {isFavorited ? 'fav' : 'no fav'}
    </button>
  );
};

export default FavoriteButton;
