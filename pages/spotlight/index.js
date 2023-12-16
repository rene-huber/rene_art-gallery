import useStore from "@/store"
import SpotLight from "@/components/SpotLight"
import randomItem from "@/lib/random-Item"

function Spotlight() {
  const { data } = useStore()

  const randomSelect = randomItem(data)

  const image = randomSelect.imageSource
  const slug = randomSelect.slug

  return <SpotLight image={image} slug={slug} />
}

export default Spotlight
