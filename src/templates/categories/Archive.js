import React from "react"
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../../lib/Helpers'
import Layout from "../../components/layout"
import Seo from '../../components/Seo'
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/Sidebar"
import PostEntry from '../../components/PostEntry'
//import ArchivePagination from '../../components/ArchivePagination'

const CategoryArchive = props => {

  const data = props.data

  const articleNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <Seo
        title={data.catTitle.title && data.catTitle.title}
        // description={data.sanityArticle.excerpt && data.sanityArticle.excerpt}
        // image={
        //   data.sanityArticle.featuredImage && data.sanityArticle.featuredImage.asset.url
        // }
        pathname={props.location.pathname}
      />
      <Helmet bodyAttributes={{ class: 'archive category' }} />
      <div id="primary" className="content-area wrapper">
        <header className="page-header">
          <h1 className="page-title">{data.catTitle.title}</h1>
        </header>

        <div className="grid-wrapper grid-main">
          <main className="content grid-wrapper grid-halves">
            {articleNodes && articleNodes.map((article, i) => <PostEntry {...article} key={i} />)}
          </main>
          <Sidebar {...props} />
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
          publishDate
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
          country {
            name
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
