import React from 'react'
import { Link } from "gatsby"
import PostMeta from './PostMeta'
import {urlFor} from '../lib/ImageUrl'

const FeaturedPost = ({ article }) => {

  return (
    <article className="featured-item">
      <figure>
        <Link to={`/${article.slug.current}`}>
          <img src={urlFor(article.featuredImage).width(300).height(500).url()} />
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
