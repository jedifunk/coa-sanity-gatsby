const path = require(`path`)
const articlesArchive = path.resolve(`./src/templates/posts/archive.js`)
const articleTemplate = path.resolve(`./src/templates/posts/single.js`)
const categoryTemplate = path.resolve(`./src/templates/categories/Archive.js`)
const locationTemplate = path.resolve(`./src/templates/locations/Archive.js`)

module.exports = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  const result = await graphql(`
    {
      posts: allSanityArticle(
        filter: {slug: {current: {ne: null} } }
        sort: {fields: _createdAt, order: DESC}
      ) {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
      catGroup: allSanityArticle(
        filter: {slug: {current: {ne: null} } }
        sort: {fields: _createdAt, order: DESC}
      ) {
        group(field: categories___slug___current) {
          fieldValue
        }
      }
      locGroup: allSanityArticle(
        filter: {slug: {current: {ne: null} } }
        sort: {fields: _createdAt, order: DESC}
      ) {
        group(field: location___slug___current) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const articles = result.data.posts.edges || []

  articles && articles.map((article, index) => {

    const previous = index === articles.length - 1 ? null : articles[index + 1].node
    const next = index === 0 ? null : articles[index - 1].node

    createPage({
      path: article.node.slug.current,
      component: articleTemplate,
      context: {
        id: article.node.id,
        previous,
        next
      },
    })
    reporter.info(`[choosingouradventure] create article: ${article.node.slug.current}`)
  })

  // Create blog post list pages
  const postsPerPage = 10;
  const numPages = Math.ceil(articles.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: articlesArchive,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
    reporter.info(`[choosingouradventure] create archive page: ${i + 1}`)
  })

  // Category Archives
  const categories = result.data.catGroup.group

  //const catNumPages = Math.ceil(categories.length / postsPerPage)

  categories.forEach(category => {
    createPage({
      path: `/${category.fieldValue}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      },
    })
    reporter.info(`[choosingouradventure] create category archive: ${category.fieldValue}`)
  })

  // Array.from({ length: catNumPages }).forEach((_, i) => {
    
  //   createPage({
  //     path: i === 0 ? `/${cat.title}` : `/${cat.title}/${i + 1}`,
  //     component: categoryTemplate,
  //     context: {
  //       category: category.id,
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       catNumPages,
  //       currentPage: i + 1
  //     }
  //   })
  //   reporter.info(`[choosingouradventure] create category page: ${i + 1}`)
  // }) 

  // Location Archives
  const locations = result.data.locGroup.group

  //const catNumPages = Math.ceil(categories.length / postsPerPage)

  locations.forEach(location => {
    createPage({
      path: `/${location.fieldValue}/`,
      component: locationTemplate,
      context: {
        location: location.fieldValue,
      },
    })
    reporter.info(`[choosingouradventure] create location archive: ${location.fieldValue}`)
  })
  
}