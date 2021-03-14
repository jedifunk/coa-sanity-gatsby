import React from 'react'
import {graphql} from 'gatsby'
import Layout from "../../components/layout"
import { Helmet } from 'react-helmet'
import Sidebar from "../../components/Sidebar"
import PortableText from '../../components/PortableText'

const SinglePage = props => {
  const data = props.data

  return (
    <Layout>
    <Helmet bodyAttributes={{ class: 'page' }} />
      <div id="primary" className="content-area wrapper">
        <div className="grid-wrapper grid-main">
          <main id="main" className="site-main" role="main">
            <article data-id={data.sanityPage.id} id={`post-${data.sanityPage.id}`} className={`post-${data.sanityPage.id} page type-page status-publish hentry entry`} >
              <header className="entry-header">
                <h1 className="entry-title">{data.sanityPage.title}</h1>
              </header>

              <div className="entry-content">
                {data.sanityPage._rawContent && <PortableText blocks={data.sanityPage._rawContent}/>}
              </div>

            </article>
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default SinglePage

export const query = graphql`
  query Page($id: String!) {
    sanityPage(id: {eq: $id}) {
      id
      title
      slug {
        current
      }
      featuredImage {
        alt
        caption
        asset {
          _id
          url
        }
      }
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
`