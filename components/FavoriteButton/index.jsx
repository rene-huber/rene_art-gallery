import useStore from "@/store"
import heart from "./heart.svg"
import Image from 'next/image';

const FavoriteButton = ({ slug }) => {
  const { artPiecesInfo, setArtPiece } = useStore()
  const isFavorited = artPiecesInfo[slug]?.isFavorite || false

  console.log(isFavorited,"isFavorited",
  "slug", slug, "artpiecesInfo",artPiecesInfo)

  const handleFavorite = () => {
    setArtPiece(slug, isFavorited)
  };

  return (
   <>
 <div>
        <Image src={heart} alt="fav" height={21} width={21} />
      </div>
   
    <button onClick={handleFavorite}>
     
      {isFavorited ?  'fav' : 'no fav'}
    </button>
   </>
  );
};

export default FavoriteButton;
