import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CountryWidget = () => {
  
  const data = useStaticQuery(query)
  const countries = data.allSanityCountry.edges.map(country => country.node).filter(x => x.menu)

  return (
    <section className="widget widget-countries">
      <h3 className="widget-title">Countries</h3>
      <ul className="cat-links">
        {countries && countries.map(country => (
          <li key={country.slug.current}>
            <Link className="pill" to={`/${country.slug.current}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CountryWidget

const query = graphql`query GetCountries {
  allSanityCountry(sort: {name: ASC}) {
    edges {
      node {
        name
        menu
        slug {
          current
        }
      }
    }
  }
}`