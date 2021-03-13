import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

export default () => (
  <StaticQuery query={graphql`
    query {
      sanitySiteSettings {
        hpHero {
          asset {
            _id
            url
            fluid(maxWidth: 1600) {
              ...GatsbySanityImageFluid
            }
          }
          alt
        }
      }
    }
  `}
  render={data => (
    <div className="hero">
      <GatsbyImage
        image={data.sanitySiteSettings.hpHero.childImageSharp.gatsbyImageData}
        alt={data.sanitySiteSettings.hpHero.alt} />
    </div>
  )}
  />
)
