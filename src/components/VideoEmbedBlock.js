import React from 'react'
import Player from 'react-player'

const VideoEmbedPlayer = ({ node }) => {

  return (
    <figure className='video-embed'>
      <Player
        className='yt-wrap'
        width='100%'
        height='100%'
        url={node.url}
        controls={true}
      />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  )
}

export default VideoEmbedPlayer