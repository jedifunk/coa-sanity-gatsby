import React, { useState } from 'react'
import {BiExpandAlt} from 'react-icons/bi'
//import SanityImage from 'gatsby-plugin-sanity-image'
import Lightbox from 'react-image-lightbox'
import { sSpeed } from '../lib/Helpers'
import 'react-image-lightbox/style.css'

const Image = ({node}) => {
  // Set State for Lightbox
  const [isOpen, setIsOpen] = useState(false)

  function updateOnClick() {
    setIsOpen(true)
  }

  return (
    <>
    <figure className={`img-full`}>
      <button onClick={updateOnClick}>
        <BiExpandAlt className='enlarge'/>
        {/* <SanityImage {...node} /> */}
        {node.caption && <figcaption>{node.caption}</figcaption>}
      </button>
    </figure>
    {isOpen && (
        <Lightbox
          mainSrc={node.asset.url}
          onCloseRequest={() => setIsOpen(false)}
          enableZoom={false}
          imageCaption={`Camera: ${
            node.asset.metadata.exif.LensModel 
          }, Aperture: f/${
            node.asset.metadata.exif.FNumber
          }, ISO: ${
            node.asset.metadata.exif.ISO
          }, Shutter Speed: ${sSpeed(
            node.asset.metadata.exif.ExposureTime
          )}`}
          imageTitle={node.caption}
        />
      )}
    </>
  )
}

export default Image