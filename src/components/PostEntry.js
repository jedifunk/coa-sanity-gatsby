import React from "react"
import { Link } from "gatsby"
import PostMeta from './PostMeta'

const PostEntry = props => {

  return (
    <article className="post" >
      <header className="entry-header">
          <h3 className="entry-title">
              <Link to={`/${props.article.slug.current}`}>{props.article.title}</Link>
          </h3>
          <PostMeta {...props.article} />
      </header>

      <div className="entry-content">{props.article.excerpt}</div>
    </article>
  )
}

export default PostEntry