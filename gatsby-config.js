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
            variable: true,
            weights: ['300..600']
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TC542ZZ",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Choosing Our Adventure',
    //     start_url: '/',
    //     background_color: `#ffcd00`,
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //     //icon: `${__dirname}/src/images/lejeune-logo.png`
    //   }
    // }
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: process.env.GATSBY_IG_USERNAME,
    //   },
    // },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
