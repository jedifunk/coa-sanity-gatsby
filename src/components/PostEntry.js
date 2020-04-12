import React from "react"
import { Link } from "gatsby"
import PostMeta from './PostMeta'

const PostEntry = ({article}) => {

  return (
    <article className="post" >
      <header className="entry-header">
          <h3 className="entry-title">
              <Link to={`/${article.slug.current}`}>{article.title}</Link>
          </h3>
          <PostMeta date={article._createdAt} author={article.author} categories={article.categories} location={article.location} />
      </header>

      <div className="entry-content">{article.excerpt}</div>
    </article>
  )
}

export default PostEntry