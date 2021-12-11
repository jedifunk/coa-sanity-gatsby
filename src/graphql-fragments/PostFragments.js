import {graphql} from 'gatsby'

export const SinglePostFragment = graphql`
  fragment SinglePostFragment on SanityArticle {
    title
    slug {
      current
    }
    _createdAt
    publishDate
    author {
      name
    }
    categories {
      title
      slug {
        current
      }
    }
    country {
      name
      slug {
        current
      }
    }
    _rawContent(resolveReferences: {maxDepth: 10})
  }
`