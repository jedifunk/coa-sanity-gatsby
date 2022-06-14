# COA Gatsby Sanity
Gatsby frontend for COA. Connects to Sanity on the backend.

Tools in use:
- [gatsby-source-sanity](https://sanity.io) to connect to my Sanity backend
- Instagram feed added via [gatsby-source-instagram-all](https://github.com/MantasMikal/gatsby-source-instagram-all).
- Lightbox functionality provided by [react-image-lightbox](https://www.npmjs.com/package/react-image-lightbox)
- [React Player](https://github.com/CookPete/react-player) for Video Embeds
- [react-map-gl](https://github.com/visgl/react-map-gl) to power Mapbox maps


## Create config file
```javascript
const Config = {
  source: {
    projectId: process.env.GATSBY_PROJECT_ID,
    dataset: process.env.GATSBY_DATASET,
    apiVersion: process.env.GATSBY_API_VERSION,
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

module.exports = Config
```

### TODO
- [ ] Better Google Font loading solution
- [ ] Add search?