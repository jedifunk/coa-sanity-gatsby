import {graphql} from 'gatsby'

export const SinglePostFragment = graphql`
  fragment SinglePostFragment on SanityArticle {
    title
    slug {
      current
    }
    _createdAt
    author {
      name
    }
    categories {
      title
      slug {
        current
      }
    }
    location {
      name
      slug {
        current
      }
    }
    _rawContent(resolveReferences: {maxDepth: 10})
  }
`