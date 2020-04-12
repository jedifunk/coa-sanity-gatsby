import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery query={graphql`
    query {
      sanitySiteSettings {
        hpHero {
          asset {
            _id
            url
          }
          alt
        }
      }
    }
  `}
  render={data => (
    <div className="hero">
      <img src={data.sanitySiteSettings.hpHero.asset.url} alt={data.sanitySiteSettings.hpHero.alt} />
    </div>
  )}
  />
)
