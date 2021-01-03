import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const LocationsWidget = () => {
  
  const data = useStaticQuery(query)
  const locations = data.allSanityLocation.edges
      
  return (
    <section id="locations" className="widget widget_cloud widget_locations">
      <h2 className="widget-title">Places</h2>
      <ul>
        {locations && locations.map(location => (
          <li key={location.node.slug.current}>
            <Link to={`/${location.node.slug.current}`}>{location.node.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LocationsWidget

const query = graphql`
  query GetLocations {
    allSanityLocation {
      edges {
        node {
          name
          slug {
            current
          }
        }
      }
    }
  }
`