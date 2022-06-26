import React from "react"
import moment from "moment/moment"
import {Link} from 'gatsby'

const PostMeta = article => {

  return (
    <div className="entry-meta">
      <span className="posted-on"><time className="entry-date published updated">{moment(article.publishDate).format(`MMMM D, YYYY`)}</time></span>
      <div>
          <ul className="cat-links">
            {article.country && <li><Link to={`/${article.country.slug.current}`}>{article.country.name}</Link></li>}
            {article.categories && article.categories.map(cat => (
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
