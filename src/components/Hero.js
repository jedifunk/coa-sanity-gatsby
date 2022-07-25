import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'

const Hero = () => {
  const data = useStaticQuery(query)
  const img = data.sanitySiteSettings.hpHero

  return (
    <div className="hero">
      <SanityImage {...img} />
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
