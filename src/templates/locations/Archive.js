import React from "react"
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../../lib/helpers'
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/Sidebar"
import PostEntry from '../../components/PostEntry'
//import ArchivePagination from '../../components/ArchivePagination'

const LocationArchive = props => {
  
  const data = props.data

  const articleNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <Helmet bodyAttributes={{ class: 'archive location' }} />
      <div id="primary" className="content-area wrapper">
        <header className="page-header">
          <h1 className="page-title">{data.locTitle.name}</h1>
        </header>

        <div className="grid-wrapper grid-main">
          <main className="content grid-wrapper grid-halves">
            {articleNodes && articleNodes.map((article, i) => <PostEntry article={article} key={i} />)}
          </main>
          <Sidebar {...props} />
        </div>
      </div>
    </Layout>
  )
}

export default LocationArchive

export const pageQuery = graphql`
  query($location: String) {
    posts: allSanityArticle(
      sort: { fields: [_createdAt], order: DESC }
      filter: {location: {slug: {current: {eq: $location}}}}
    ) {
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
          location {
            name
            slug {
              current
            }
          }
          excerpt
        }
      }
    }
    locTitle: sanityLocation(slug: {current: {eq: $location}}) {
      name
    }
  }
`