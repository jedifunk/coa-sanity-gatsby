import React from "react"
import moment from "moment/moment"
import {Link} from 'gatsby'

const PostMeta = ({ date, author, categories, location }) => {

  return (
    <div className="entry-meta">
      <span className="posted-on"><time className="entry-date published updated">{moment(date).format(`MMMM D, YYYY`)}</time></span>
      <span className=""> by <span className="author vcard">{author && author.name}</span></span>
      <div className="cat-links tax-links">
          <ul className="post-categories">
            {location && <li><Link to={location.slug.current}>{location.name}</Link>, </li>} 
            {categories && categories.map(cat => (
                <li key={cat.title}><Link to={`/${cat.slug.current}`}>{cat.title}</Link></li>
            ))
            .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, ", ", elem]
            }, null)}
            </ul>
      </div>
    </div>
  )
}

export default PostMeta