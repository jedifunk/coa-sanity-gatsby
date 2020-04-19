const Config = require('./config')

module.exports = {
  siteMetadata: {
    title: `COA Gatsby for Sanity`,
    description: `Gatsby frontend for Sanity CMS`,
    author: `@jedifunk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: Config.source.projectId,
        dataset: Config.source.dataset,
        watchMode: true,

        // a token with read permissions is required
        // if you have a private dataset
        //token: process.env.MY_SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        //graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Playfair Display',
            variable: true,
            weights: ['400..700']
          },
          {
            family: 'Raleway',
            weights: [300, 600]
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: Config.social.iGUsername,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
