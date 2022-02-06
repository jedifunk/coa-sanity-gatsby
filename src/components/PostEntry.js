import React from "react"
import { Link } from "gatsby"
import PostMeta from './PostMeta'

const PostEntry = props => {

  return (
    <article className="post" >
      <header className="entry-header">
          <h2 className="entry-title">
              <Link to={`/${props.article.slug.current}`}>{props.article.title}</Link>
          </h2>
          <PostMeta {...props.article} />
      </header>

      <div className="entry-content">{props.article.excerpt}</div>
    </article>
  )
}

export default PostEntry