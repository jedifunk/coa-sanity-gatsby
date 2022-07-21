import React from "react"
import { Link } from "gatsby"
import SanityImage from 'gatsby-plugin-sanity-image'
import PostMeta from './PostMeta'

const PostEntry = article => {
  return (
    <article className="post-entry" >
      <header className="entry-header">
      <Link to={`/${article.slug.current}`}>{article.featuredImage && <SanityImage {...article.featuredImage} width={347} height={196} />}</Link>
        <h2 className="entry-title">
          <Link to={`/${article.slug.current}`}>{article.title}</Link>
        </h2>
        <PostMeta {...article} />
      </header>

      <div className="excerpt">{article.excerpt}</div>
    </article>
  )
}

export default PostEntry