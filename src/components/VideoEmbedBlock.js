import React from 'react'
import Player from 'react-player'

const VideoEmbedPlayer = ({ node }) => {

  return (
    <Player url={node.url} />
  )
}

export default VideoEmbedPlayer