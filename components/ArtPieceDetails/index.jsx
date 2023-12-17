import Image from "next/image"
import { useRouter } from "next/router"
import FavoriteButton from "../FavoriteButton"
import CommentForm from "../CommentForm";


function SpotLight({ image, title, artist, year, genre, slug }) {
  const router = useRouter()
  return (
    <>
      <div>
        <Image src={image} width={500} height={500} alt={artist} />

        <h2>{artist}</h2>
        <h2>{title}</h2>
        <h2>{year}</h2>
        <h2>{genre}</h2>

        <button onClick={()=> {router.back()}}>Back</button>

        <FavoriteButton slug={slug} />
        <CommentForm slug={slug} />
      </div>
    </>
  );
}

export default SpotLight
