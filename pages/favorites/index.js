import ArtPieces from "@/components/ArtPieces";
import useStore from "@/store";
import { motion, AnimatePresence } from "framer-motion";


const FavoritesPage = () => {
  const { artPiecesInfo, data } = useStore();

  const variants = {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 , transition: { duration: 1.3 }},
    exit: { opacity: 0, y: -5, transition: { duration: 1.3 } }

  };

  const filteredFavoriteArtPieces = data.filter(artPiece => 
    artPiecesInfo[artPiece.slug] && artPiecesInfo[artPiece.slug].isFavorite
  );
  

  
 

  return (
    
    <div>
         <h1>Favorite Art Pieces</h1>
 
       <AnimatePresence>
        <motion.div
          key={filteredFavoriteArtPieces.slug}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
      <ArtPieces pieces={filteredFavoriteArtPieces} />
         
        </motion.div>
      </AnimatePresence>



      
    </div>
  );
};

export default FavoritesPage;
