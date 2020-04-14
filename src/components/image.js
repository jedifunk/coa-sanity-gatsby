import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
const Config = require('../../config')

export default ({node}) => {

  if (!node || !node.asset || !node.asset._id) { return (<pre>Oops, image</pre>) }

  return (
    <figure>
      <Img fluid={node.asset.fluid} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
