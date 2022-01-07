const Config = {
  source: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    apiVersion: process.env.API_VERSION,
  },
  // search: {
  //   appId: 'HM0QY7T2WG',
  //   searchKey: 'ae17fa2777d96a85909833c3e0dce7cc',
  //   adminKey: '6f7b14187225ecb9224a7ba68672ac3c',
  // },
  social: {
    twitterHandle: process.env.TWITTER_HANDLE,
    iGUsername: process.env.IG_USERNAME
  }
}

module.exports = Config
