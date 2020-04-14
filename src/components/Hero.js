import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      <Img fluid={data.sanitySiteSettings.hpHero.asset.fluid} alt={data.sanitySiteSettings.hpHero.alt} />
    </div>
  )}
  />
)
