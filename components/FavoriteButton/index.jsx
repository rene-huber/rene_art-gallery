import useStore from "@/store"

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = ({ slug }) => {
  const { artPiecesInfo, setArtPiece } = useStore()
  const isFavorited = artPiecesInfo[slug]?.isFavorite || false



  const handleFavorite = () => {
    setArtPiece(slug, isFavorited)
  };

  return (
   <>
 
   
    <button className="buttonFav" onClick={handleFavorite}>
     
      {isFavorited ?   <FavoriteIcon /> :  <FavoriteBorderIcon /> }
    </button>
   </>
  );
};

export default FavoriteButton;
