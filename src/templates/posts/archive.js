import React from "react"
import {graphql} from 'gatsby'

import {mapEdgesToNodes} from '../../lib/Helpers'
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import Hero from '../../components/Hero'
import FeaturedPost from '../../components/FeaturedPost'
import Sidebar from "../../components/Sidebar"
import PostEntry from '../../components/PostEntry'
import ArchivePagination from '../../components/ArchivePagination'

const BlogArchive = props => {
  const {
    data,
    pageContext
  } = props

  const articleNodes = data && data.posts && mapEdgesToNodes(data.posts)
  
  const paged = pageContext.currentPage > 1 ? `paged page-${pageContext.currentPage}` : ''

  return (
    <Layout>
      <Helmet bodyAttributes={{ class: `home blog ${paged}` }} />
      {pageContext.currentPage === 1 ? <Hero /> : null }

      <div id="primary" className="content-area wrapper">
        <main id="main" className="site-main" role="main">
          {pageContext.currentPage === 1 ? 
            <div className="featured grid-wrapper grid-fourths">
            {articleNodes && articleNodes.slice(0, 4).map((article, i) => 
              <FeaturedPost key={i} {...article} />           
            )}
          </div>
          : null }
          
          <div className="grid-wrapper grid-main">
            <div>
              <div className="content grid-wrapper grid-halves">
                {pageContext.currentPage === 1 ? 
                  articleNodes && articleNodes.slice(4).map((article, i) => <PostEntry article={article} key={i} />)
                :
                  articleNodes && articleNodes.map((article, i) => <PostEntry article={article} key={i} />)
                }
              </div>
              <ArchivePagination details={pageContext} />
            </div>
            <Sidebar page={`archive`} current={pageContext.currentPage} />
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default BlogArchive

export const query = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    posts: allSanityArticle(
      sort: { fields: publishDate, order: DESC }
      filter: { slug: { current: { ne: null } } }
      limit: $limit
      skip: $skip
      ) {
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
          featuredImage {
            ...ImageWithPreview
            alt
            caption
            asset {
              _id
              url
            }
            hotspot {
              height
              width
              x
              y
            }
          }
          excerpt
        }
      }
    }
  }
`