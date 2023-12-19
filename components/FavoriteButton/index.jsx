import useStore from "@/store"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = ({ slug }) => {
  const { artPiecesInfo, setArtPiece, isDarkTheme } = useStore()
  const isFavorited = artPiecesInfo[slug]?.isFavorite || false



  const handleFavorite = () => {
    setArtPiece(slug, { ...artPiecesInfo[slug], isFavorite: !isFavorited });
  };

  return (
   <>
 
   
 <button className="buttonFav" onClick={handleFavorite}>
      {isFavorited ? (
        <FavoriteIcon style={{ color: isDarkTheme ? 'white' : 'black' }} />
      ) : (
        <FavoriteBorderIcon style={{ color: isDarkTheme ? 'white' : 'black' }} />
      )}
    </button>
   </>
  );
};

export default FavoriteButton;
