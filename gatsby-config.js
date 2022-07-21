require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `COA Gatsby for Sanity`,
    description: `Gatsby frontend for Sanity CMS`,
    author: `@jedifunk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        projectId: process.env.GATSBY_PROJECT_ID,
        dataset: process.env.GATSBY_DATASET,
        apiVersion: process.env.GATSBY_API_VERSION,
        watchMode: process.env.GATSBY_WATCHMODE,

        // a token with read permissions is required
        // if you have a private dataset
        //token: process.env.MY_SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        //graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: process.env.GATSBY_PROJECT_ID,
        dataset: process.env.GATSBY_DATASET,
        customImageTypes: ["SanityImageFull"],
      }
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_IG_TOKEN,
        limit: 9,
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TC542ZZ",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    }
  ],
}
