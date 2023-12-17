import React, { useEffect, useState } from 'react';
import useStore from "@/store"
import SpotLight from "@/components/SpotLight"
import randomItem from "@/lib/random-Item"
import FavoriteButton from "@/components/FavoriteButton"

function Spotlight() {
  const { data } = useStore()
  const [randomSelect, setRandomSelect] = useState(null);

useEffect(() => {
    setRandomSelect(randomItem(data))}, [data])

  if (!randomSelect) { return null }

  const image = randomSelect.imageSource
  const slug = randomSelect.slug
  const artist = randomSelect.artist

  return(
    <>
    <SpotLight image={image} slug={slug} artist={artist} />
    <FavoriteButton slug={slug}/>
    </>
  )
 
}

export default Spotlight
