import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const RecentPostsWidget = () => {

  const data = useStaticQuery(query)
  const posts = data.allSanityArticle.edges

  return (
    <section id="recent-posts-2" className="widget widget_recent_entries">
      <h3 className="widget-title">Recent Articles</h3>
      <ul>
        {posts && posts.map(post => (

          <li key={post.node.slug.current}>
            <Link to={`/${post.node.slug.current}`}>{post.node.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RecentPostsWidget

const query = graphql`
query GetRecentPosts {
  allSanityArticle(limit: 5, sort: {order: DESC, fields: publishDate}) {
    edges {
      node {
        title
        publishDate
        slug {
          current
        }
      }
    }
  }
}`
