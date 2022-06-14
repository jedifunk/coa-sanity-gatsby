import React, { useState } from 'react'
import {BiExpandAlt} from 'react-icons/bi'
import SanityImage from 'gatsby-plugin-sanity-image'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const Image = ({node}) => {
  // Set State for Lightbox
  const [isOpen, setIsOpen] = useState(false)

  // Shutter Speed conversion function
  function sSpeed(d) {
    if (d >= 1) {
      return Math.round(d) + "s"
    }
    var df = 1,
      top = 1,
      bot = 1
    var tol = 1e-8 // seems to allow for d > 1e-4
    while (df !== d && Math.abs(df - d) > tol) {
      if (df < d) {
        top += 1
      } else {
        bot += 1
        top = parseInt(d * bot, 10)
      }
      df = top / bot
    }
    if (top > 1) {
      bot = Math.round(bot / top)
      top = 1
    }
    if (bot <= 1) {
      return "1s"
    }
    return top + "/" + bot + "s"
  }
  function updateOnClick() {
    setIsOpen(true)
  }
  return (
    <>
    <figure className={`img-full`}>
      <button onClick={updateOnClick}>
        <BiExpandAlt/>
        <SanityImage {...node} />
        <figcaption>{node.caption}</figcaption>
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