import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const RECENT_POSTS_QUERY = graphql`
query GetRecentPosts {
  allSanityArticle(limit: 5) {
    edges {
      node {
        title
        slug {
          current
        }
      }
    }
  }
}
`

const RecentPostsWidget = () => (
  <StaticQuery
    query={RECENT_POSTS_QUERY}
    render={data => {
      const posts = data.allSanityArticle.edges

      return (
        <section id="recent-posts-2" className="widget widget_recent_entries">
          <h2 className="widget-title">Recent Articles</h2>
          <ul>
            {posts && posts.map(post => (

              <li key={post.node.slug.current}>
                <Link to={`/${post.node.slug.current}`}>{post.node.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )
    }}
  />
)

export default RecentPostsWidget
