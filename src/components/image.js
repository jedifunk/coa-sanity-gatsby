import React from 'react'
import config from '../../config'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'

export default ({node}) => {

  if (!node || !node.asset || !node.asset._id) { return (<pre>Oops, image</pre>) }

  const fluidProps = getFluidGatsbyImage(node.asset._id, {maxWidth: 800}, config.source)

  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
