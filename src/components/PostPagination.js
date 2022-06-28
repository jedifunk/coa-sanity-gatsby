import React from 'react'
import { Link } from 'gatsby'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const PostPagination = ({ previous, next }) => {

  return (
    <nav className="navigation post-navigation" role="navigation">
    {previous && (
      <div className="nav-previous">
        <FaAngleLeft />
        <Link to={`/${previous.slug.current}`} rel="prev">
          <span className="post-title">
            {previous.title}
          </span>
        </Link>
      </div>
    )}
    {next && (
      <div className="nav-next">
        <Link to={`/${next.slug.current}`} rel="next">
          <span className="post-title">
            {next.title}
          </span>
        </Link>
        <FaAngleRight />
      </div>
    )}
    </nav>
  )
}

export default PostPagination
