const createPosts = require('./create/createPosts')
const createPages = require('./create/createPages')

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createPosts({ actions, graphql, reporter })
  await createPages({ actions, graphql, reporter })
  // await createUsers({ actions, graphql })
}