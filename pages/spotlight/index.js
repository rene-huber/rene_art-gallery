
import useStore from '@/store';
import SpotLight from '@/components/SpotLight';
import randomItem from '@/lib/random-Item';

function Spotlight() {
    const { data } = useStore();

    if (!Array.isArray(data.imageSource) || data.imageSource.length === 0) {
        return null; // O puedes retornar un mensaje de error o lo que prefieras
      }


// console.log(data.imageSource)
const randomImage = randomItem(data.imageSource)

console.log(randomImage)


return (
    <SpotLight image={randomImage}/>
  );

}

export default Spotlight