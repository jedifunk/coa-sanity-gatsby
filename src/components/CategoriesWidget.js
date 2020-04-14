import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
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
  }
`

const CategoriesWidget = () => (
  <StaticQuery
    query={ALL_CATEGORIES_QUERY}
    render={data => {
      const categories = data.allSanityCategory.edges

      return (
        <section id="categories-2" className="widget widget_cloud widget_categories">
          <h2 className="widget-title">Categories</h2>
          <ul>
            {categories && categories.map(category => (
              <li key={category.node.slug.current}>
                <Link to={`/category/${category.node.slug.current}`}>{category.node.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )
    }}
  />
)

export default CategoriesWidget
