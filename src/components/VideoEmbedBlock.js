import React from 'react'
import Player from 'react-player'

const VideoEmbedPlayer = ({ node }) => {
  const link = node.url
  console.log(link)
  if (link.includes('youtube') ) {
    console.log('YT')
  }
  const Spot = {
    borderRadius: `12px`
  }

  return (
    <figure className='embed yt-embed'>
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