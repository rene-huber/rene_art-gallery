import Image from "next/image"
import { useRouter } from "next/router"
import FavoriteButton from "../FavoriteButton"
import CommentForm from "../CommentForm";
import style from "./ArtPieceDetail.module.css"



function ArtPieceDetail({ image, title, artist, year, genre, slug }) {
  const router = useRouter()
  return (
    <>
      <div>
        <Image src={image} width={500} height={500} alt={artist} />

        <h1>{title}</h1>
        <h4>{artist}</h4>

        <h4>Year:<span style={{color:"grey"}}>{year}</span></h4>
        <h4>Genre: <span style={{color:"grey"}}>{genre}</span></h4>

       

        <FavoriteButton slug={slug} />
        <CommentForm slug={slug} />
        <button className={style.backBtn} onClick={()=> {router.back()}}>Back</button>
      </div>
    </>
  );
}

export default ArtPieceDetail
