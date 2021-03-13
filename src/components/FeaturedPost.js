import React from 'react'
import { Link } from "gatsby"
import PostMeta from './PostMeta'
import {urlFor} from '../lib/ImageUrl'
import SanityImage from 'gatsby-plugin-sanity-image'

const FeaturedPost = ({ article }) => {
console.log(article)
  return (
    <article className="featured-item">
      <figure>
        <Link to={`/${article.slug.current}`}>
          {/* {article.featuredImage && <SanityImage {...article.featuredImage} width={300} height={500} />} */}
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
