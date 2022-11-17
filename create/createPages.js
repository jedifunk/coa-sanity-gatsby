const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/pages/index.js`)

module.exports = async ({ actions, graphql, reporter }) => {
  const {createPage} = actions

  const result = await graphql(`{
  pages: allSanityPage(
    filter: {slug: {current: {ne: null}}}
    sort: {_createdAt: DESC}
  ) {
    edges {
      node {
        id
        slug {
          current
        }
      }
    }
  }
}`)

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.pages.edges || []

  pages && pages.map((page, i) => {
    createPage({
      path: `/${page.node.slug.current}`,
      component: pageTemplate,
      context: {
        id: page.node.id
      }
    })
    reporter.info(`[choosingouradventure] create page: ${page.node.slug.current}`)
  })
}