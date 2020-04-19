import React from 'react'
import { Link } from "gatsby"
import PostMeta from './PostMeta'
import Image from "./Image"
import urlFor from '../lib/image-url'

const FeaturedPost = ({ article }) => {
//console.log(article.featuredImage)
//console.log(urlFor(article.featuredImage))
  return (
    <article className="featured-item">
      <figure>
        <Link to={`/${article.slug.current}`}>
          {/* <Image node={article.featuredImage} /> */}
          {/* <img src={urlFor(article.featuredImage.asset._id).width(300).url()} /> */}
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
