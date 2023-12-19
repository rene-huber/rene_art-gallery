import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion';
import styles from "./ArtPieces.module.css"

import FavoriteButton from "@/components/FavoriteButton"

function ArtPieces({ pieces, isFavorite }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <ul className={styles.gridContainer}>
        {pieces.map((piece, index) => (
            <motion.li 
                key={piece.slug}
                className={styles.gridItem}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: 0.2 + 0.1 * index }}
            >
                <Link href={`/art-pieces/${piece.slug}`}>
                    
                        <h2>{piece.title}</h2>
                        <Image
                            src={piece.imageSource}
                            alt={piece.title}
                            width={200}
                            height={200}
                        />
                        <p>{piece.artist}</p>
                   
                </Link>
                <FavoriteButton slug={piece.slug} isFavorite={isFavorite} />
            </motion.li>
        ))}
    </ul>
);
}

export default ArtPieces
