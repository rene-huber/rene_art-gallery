import { useRouter } from 'next/router';
import useStore from '@/store';
import ArtPieceDetails from '@/components/ArtPieceDetails';

function OneArtSelected() {
    const { data } = useStore();

    const router = useRouter();
    const { slug } = router.query;


    const selectedArt = data.find((art) => art.slug === slug);
    console.log(selectedArt)

    const image = selectedArt.imageSource
 
    const artist = selectedArt.artist

return(
    <ArtPieceDetails image={image}  artist={artist} />
)

}

export default OneArtSelected;
