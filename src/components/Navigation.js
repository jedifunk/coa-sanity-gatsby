import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'

export default () => (
  <StaticQuery query={graphql`
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
  `}
  render={data => {
    const items = data.sanitySiteSettings._rawSiteNav.menuItems
    const cats = data.allSanityCategory.edges
    const locs = data.allSanityLocation.edges

    return (
      <nav id="site-navigation" className="main-navigation" role="navigation" aria-label="Primary Menu">
        <ul id="menu-primary" className="menu">
          {items && items.map((item, i) => 
            <li key={i} className="menu-item menu-item-has-children">
              <Link to={!item.page ? item.customUrl : item.page.slug.current} >{item.name}</Link>
              <ul className="sub-menu">
                {item.page ? null : item.name === 'Logistics' ? (
                  cats && cats.map((cat, i) => (
                    <li key={i} className="menu-item"><Link to={cat.node.slug.current}>{cat.node.title}</Link></li>
                  ))
                ) : (
                  locs && locs.map((loc, i) => (
                    <li key={i} className="menu-item"><Link to={loc.node.slug.current}>{loc.node.name}</Link></li>
                  ))
                )}
              </ul>
            </li>
          )}
        </ul>
      </nav>
    )
  }}
  />
)
