import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SanityImage from 'gatsby-plugin-sanity-image'

const Hero = () => {
  const data = useStaticQuery(query)
  //const img = getImage(data.sanitySiteSettings.hpHero.asset.url)

  return (
    <div className="hero">
      <SanityImage {...data.sanitySiteSettings.hpHero} />
      {/* <GatsbyImage
        image={img}
        alt={data.sanitySiteSettings.hpHero.alt} /> */}
    </div>
  )
}
export default Hero

export const query = graphql`
query {
  sanitySiteSettings {
    hpHero {
      alt
      ...ImageWithPreview
    }
  }
}
`
