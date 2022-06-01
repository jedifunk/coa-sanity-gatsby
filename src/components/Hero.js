import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'

const Hero = () => {
  const data = useStaticQuery(query)

  return (
    <div className="hero">
      <SanityImage {...data.sanitySiteSettings.hpHero} />
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
