import useStore from '@/store';
import SpotLight from '@/components/SpotLight';
import randomItem from '@/lib/random-Item';

function Spotlight() {
    const { data } = useStore();

    const randomSelect = randomItem(data);
    console.log(randomSelect)

    return <SpotLight image={randomSelect.imageSource} />;
}

export default Spotlight;
