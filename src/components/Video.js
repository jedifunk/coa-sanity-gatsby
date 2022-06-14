import React from "react"

const VideoBlock = ({ node }) => {
  //const { src, poster, preoload, playsInline, muted, loop, controls, className, caption, autoplay, align } = props
  if (!node || !node.asset || !node.asset._id) { return (<pre>Oops, video</pre>) }

  return (
    <figure className="video-block">
      <video src={node.asset.url} controls></video>
      <figcaption>{node.caption}</figcaption>
    </figure>
  )

}

export default VideoBlock