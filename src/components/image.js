import React from 'react'
import SanityImage from 'gatsby-plugin-sanity-image'

const Image = ({node}) => {
  return (
    <figure>
      <SanityImage {...node} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}

export default Image