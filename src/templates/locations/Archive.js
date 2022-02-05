import React from "react"
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../../lib/Helpers'
import Layout from "../../components/layout"
import Seo from '../../components/Seo'
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/Sidebar"
import PostEntry from '../../components/PostEntry'
//import ArchivePagination from '../../components/ArchivePagination'

const LocationArchive = props => {

  const data = props.data

  const articleNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <Seo
        title={data.countryTitle.name && data.countryTitle.name}
        //description={data.sanityArticle.excerpt && data.sanityArticle.excerpt}
        // image={
        //   data.sanityArticle.featuredImage && data.sanityArticle.featuredImage.asset.url
        // }
        pathname={props.location.pathname}
      />
      <Helmet bodyAttributes={{ class: 'archive location' }} />
      <div id="primary" className="content-area wrapper">
        <header className="page-header">
          <h1 className="page-title">{data.countryTitle.name}</h1>
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
  query($country: String) {
    posts: allSanityArticle(
      sort: { fields: [publishDate], order: DESC }
      filter: {country: {slug: {current: {eq: $country}}}}
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
          excerpt
        }
      }
    }
    countryTitle: sanityCountry(slug: {current: {eq: $country}}) {
      name
    }
  }
`
