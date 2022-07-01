import React from 'react'
import { Link } from "gatsby"
import PostMeta from './PostMeta'
import SanityImage from 'gatsby-plugin-sanity-image'

const FeaturedPost = article => {

  return (
    <article className="featured-item">
      <figure>
        <Link to={`/${article.slug.current}`}>
          {article.featuredImage && <SanityImage {...article.featuredImage} width={568} height={320} />}
        </Link>
        <figcaption>
          <h2 className="entry-title">
            <Link to={`/${article.slug.current}`}>{article.title}</Link>
          </h2>
          <PostMeta {...article} />

          <div className="excerpt">{article.excerpt}</div>
        </figcaption>
      </figure>
    </article>
  )
}

export default FeaturedPost
