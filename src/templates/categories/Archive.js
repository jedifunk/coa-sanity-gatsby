import React from "react"
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../../lib/helpers'
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/Sidebar"
import PostEntry from '../../components/PostEntry'
import ArchivePagination from '../../components/ArchivePagination'

const CategoryArchive = props => {
  const {
    data,
    pageContext
  } = props

  const articleNodes = data && data.posts && mapEdgesToNodes(data.posts)
 

  return (
    <Layout>
      <Helmet bodyAttributes={{ class: 'archive category' }} />
      <div id="primary" className="content-area wrapper">
        <header className="page-header">
          <h1 className="page-title">{data.catTitle.title}</h1>
        </header>

        <div className="grid-wrapper grid-main">
          <main className="content grid-wrapper grid-halves">
            {articleNodes && articleNodes.map((article, i) => <PostEntry article={article} key={i} />)}
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default CategoryArchive

export const pageQuery = graphql`
  query($category: String) {
    posts: allSanityArticle(
      sort: { fields: [_createdAt], order: DESC }
      filter: {categories: {elemMatch: {slug: {current: {eq: $category}}}}}
    ) {
      totalCount
      edges {
        node {
          id
          title
          _createdAt
          slug {
            current
          }
          author {
            name
          }
          categories {
            title
            slug {
              current
            }
          }
          excerpt
        }
      }
    }
    catTitle: sanityCategory(slug: {current: {eq: $category}}) {
      title
    }
  }
`