const Config = require('../config')

const queries = [
  {
    query: `
    {
      wpgraphql {
        posts {
          edges {
            node {
              title
              uri
              excerpt
              date
            }
          }
        }
      }
    }
    `,
    transformer: ({ data }) =>
      data.wpgraphql.posts.edges.map(
        ({
          node: {
            title,
            uri,
            excerpt,
            date,
          },
        })
      ),
  },
]

module.exports = {
  appId: Config.search.appId,
  apiKey: Config.search.adminKey,
  indexName: 'Posts',
  queries,
  chunkSize: 10000, // default: 1000
}
