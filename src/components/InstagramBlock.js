import React from "react"

const InstagramBlock = ({ node }) => {

  const { url } = node

  if (!url) {
    return <pre>Missing URL for Instagram post</pre>;
  }
  return
  // return (
  //   <InstagramEmbed
  //     url={url}
  //     clientAccessToken='1528355780697968|4a1b89d83237ebfa3c1f3d88a0fcf63a'
  //     maxWidth={320}
  //     hideCaption={false}
  //     containerTagName='div'
  //     protocol=''
  //     injectScript
  //     onLoading={() => {}}
  //     onSuccess={() => {}}
  //     onAfterRender={() => {}}
  //     onFailure={() => {}}
  //     className={`ig-embed`}
  //   />
  // )
}

export default InstagramBlock
