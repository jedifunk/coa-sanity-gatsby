import React from "react"
import { Link } from "gatsby"
import PostMeta from './PostMeta'

const PostEntry = article => {

  return (
    <article className="post" >
      <header className="entry-header">
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