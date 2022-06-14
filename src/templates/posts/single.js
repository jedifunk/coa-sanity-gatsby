import React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout"
import Seo from '../../components/Seo'
import { Helmet } from 'react-helmet'
import PostPagination from '../../components/PostPagination'
import Sidebar from "../../components/Sidebar"
import PostMeta from '../../components/PostMeta'
import PortableText from '../../components/PortableText'
//import SocialShare from '../../components/SocialShare'

const SinglePost = ({ data, pageContext }) => {
  const {
    previous,
    next
  } = pageContext
  const article = data.sanityArticle
  
  return (
    <Layout>
      <Seo
      
        title={data.sanityArticle.title && data.sanityArticle.title}
        description={data.sanityArticle.excerpt && data.sanityArticle.excerpt}
        image={
          data.sanityArticle.featuredImage && data.sanityArticle.featuredImage
        }
        pathname={data.sanityArticle.slug.current}
      />
      <Helmet bodyAttributes={{ class: "single article" }} />
      <div id="primary" className="content-area wrapper">
        <div className="grid-wrapper grid-main">
          <main id="main" className="site-main" role="main">
            <article
              data-id={data.sanityArticle.id}
              className={`post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
            >
              <header className="entry-header">
                <h2 className="entry-title">{data.sanityArticle.title}</h2>
                <PostMeta {...article} />
              </header>

              {data.sanityArticle._rawContent && <PortableText blocks={data.sanityArticle._rawContent}/>}

              {/* <SocialShare
                socialConfig={{
                  config: {
                    url: `/${data.sanityArticle.slug.current}`,
                  },
                }}
                title={data.sanityArticle.title}
                featuredImage={data.sanityArticle.featuredImage && data.sanityArticle.featuredImage}
                twitterHandle={Config.social.twitterHandle}
              /> */}

            </article>

            <PostPagination previous={previous} next={next} />
            
          </main>
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default SinglePost

export const query = graphql`
  query Single($id: String!) {
    sanityArticle(id: {eq: $id}) {
      ...SinglePostFragment
    }
  }
`
