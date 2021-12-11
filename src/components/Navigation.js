import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

const Nav = () => {

  const data = useStaticQuery(query)

  const items = data.sanitySiteSettings._rawSiteNav.menuItems
  const cats = data.allSanityCategory.edges
  const countries = data.allSanityCountry.edges.map(country => country.node).filter(x => x.menu)

  return (
    <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Primary Menu">
      <ul id="menu-primary" className="menu">
        {items && items.map((item, i) => {

          return (
          <li key={i} className="menu-item menu-item-has-children">
            <Link to={!item.page ? `/${item.customUrl}` : `/${item.page.slug.current}`} >{item.name}</Link>
            {item.customUrl && <ul className="sub-menu">
              {item.page ? null : item.name === 'Logistics' ? (
                cats && cats.map((cat, i) => (
                  <li key={i} className="menu-item"><Link to={`/${cat.node.slug.current}`}>{cat.node.title}</Link></li>
                ))
              ) : (
                countries && countries.map((country, i) => (
                  <li key={i} className="menu-item"><Link to={`/${country.slug.current}`}>{country.name}</Link></li>
                ))
              )}
            </ul>}
          </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav

const query = graphql`
query Nav {
  sanitySiteSettings {
    _rawSiteNav(resolveReferences: {maxDepth: 5})
  }
  allSanityCategory {
    edges {
      node {
        title
        slug {
          current
        }
      }
    }
  }
  allSanityCountry {
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