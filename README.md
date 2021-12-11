# COA Gatsby Sanity
Gatsby frontend for COA. Connects to Sanity on the backend.

Tools in use:
- [gatsby-source-sanity](https://sanity.io) to connect to my Sanity backend
- Instagram feed added via [gatsby-source-instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram/).
- Lightbox functionality provided by [react-image-lightbox](https://www.npmjs.com/package/react-image-lightbox)
- [React Player](https://github.com/CookPete/react-player) for Video Embeds
- [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) to power Mapbox maps


## Create config file
```javascript
const Config = {
  source: {
    protocol: 'https',
    wpUrl: 'yourdomain.com',
  },
  search: {
      appID: APP_ID,
      adminKey: ADMIN_KEY,
      searchKey: SEARCH_KEY,
  },
  social: {
      twitterHandle: TWITTER_HANDLE,
  }
}

Config.source.url = Config.source.protocol + '://' + Config.source.wpUrl;

module.exports = Config
```

### TODO
- [ ] decide between `@sanity/image-url` and `gatsby-image`
- [ ] find new IG embed solution