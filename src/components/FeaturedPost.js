import React from 'react'
import { Link } from "gatsby"
import PostMeta from './PostMeta'
import Image from "./Image"

const FeaturedPost = ({ article }) => {

  return (
    <article className="featured-item">
      <figure>
        <Link to={`/${article.slug.current}`}>
          <Image node={article.featuredImage} />
        </Link>
        <figcaption>
          <h3 className="entry-title">
            <Link to={`/${article.slug.current}`}>{article.title}</Link>
          </h3>
          <PostMeta date={article._createdAt} author={article.author} categories={article.categories} location={article.location} />
        </figcaption>
      </figure>
    </article>
  )
}

export default FeaturedPost
