import React from 'react'
import Player from 'react-player'

const VideoEmbedPlayer = ({ node }) => {

  return (
    <figure className='video-embed'>
      <Player 
        url={node.url}
        width='725px'
        height='408px'
        controls={true}
      />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  )
}

export default VideoEmbedPlayer