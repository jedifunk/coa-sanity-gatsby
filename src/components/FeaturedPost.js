import React from 'react'
import { Link } from "gatsby"
import PostMeta from './PostMeta'
import {urlFor} from '../lib/ImageUrl'
//import SanityImage from 'gatsby-plugin-sanity-image'

const FeaturedPost = article => {

  return (
    <article className="featured-item">
      <figure>
        <Link to={`/${article.slug.current}`}>
          {/* {article.featuredImage && <SanityImage {...article.featuredImage} width={300} height={500} />} */}
          {article.featuredImage && <img src={urlFor(article.featuredImage).width(300).height(500).url()} alt={article.featuredImage.alt ? article.featuredImage.alt : ''} />}
        </Link>
        <figcaption>
          <h3 className="entry-title">
            <Link to={`/${article.slug.current}`}>{article.title}</Link>
          </h3>
          <PostMeta {...article} />
        </figcaption>
      </figure>
    </article>
  )
}

export default FeaturedPost
