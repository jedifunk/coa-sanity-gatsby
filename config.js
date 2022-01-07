const Config = {
  source: {
    projectId: process.env.GATSBY_PROJECT_ID,
    dataset: process.env.GATSBY_DATASET,
    apiVersion: process.env.GATSBY_API_VERSION,
  },
  // search: {
  //   appId: 'HM0QY7T2WG',
  //   searchKey: 'ae17fa2777d96a85909833c3e0dce7cc',
  //   adminKey: '6f7b14187225ecb9224a7ba68672ac3c',
  // },
  social: {
    twitterHandle: process.env.GATSBY_TWITTER_HANDLE,
    iGUsername: process.env.GATSBY_IG_USERNAME
  }
}

module.exports = Config
