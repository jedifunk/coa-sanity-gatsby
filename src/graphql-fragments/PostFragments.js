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
    excerpt
    featuredImage {
      ...ImageWithPreview
      alt
      caption
      asset {
        _id
        url
      }
      hotspot {
        height
        width
        x
        y
      }
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