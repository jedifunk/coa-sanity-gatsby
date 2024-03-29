import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const CategoriesWidget = () => {
  
  const data = useStaticQuery(query)
  const categories = data.allSanityCategory.edges

  return (
    <section className="widget widget-categories">
      <h3 className="widget-title">Categories</h3>
      <ul className="cat-links">
        {categories && categories.map(category => (
          <li key={category.node.slug.current}>
            <Link className="pill" to={`/${category.node.slug.current}`}>{category.node.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoriesWidget

const query = graphql`
  query GetCategories {
    allSanityCategory(sort: {fields: title}) {
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