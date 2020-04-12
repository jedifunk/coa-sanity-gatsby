import React, { useState } from "react"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
//import ReactHtmlParser from 'react-html-parser'

const GalleryBlock = ({ node }) => {
  //console.log(node)
  
  //const {columns, images, imageCrop, align, caption} = attributes
  
  // check for null value... mostly for older posts that randomly return null
  const cols = (node.columns != null) ? node.columns : 3

  // Set State for Lightbox
  const [photoIndex, setPhotoIndex] = useState(0)
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

  return (
    <figure className={`wp-block-gallery columns-${cols} is-cropped`}>
      <ul className="blocks-gallery-grid">
        {node.images.map((img, index) => {
          // setup onclick function to handle state change
          function updateOnClick() {
            setPhotoIndex(index)
            setIsOpen(true)
          }
          return (
            <li
              key={index}
              onClick={updateOnClick}
              className="blocks-gallery-item"
            >
              <figure>
                <img src={img.asset.url} alt={img.alt} />
                <figcaption>{img.caption}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>

      {isOpen && (
        <Lightbox
          mainSrc={node.images[photoIndex].asset.url}
          nextSrc={
            node.images[(photoIndex + 1) % node.images.length]
              .asset.url
          }
          prevSrc={
            node.images[
              (photoIndex + node.images.length - 1) %
              node.images.length
            ].asset.url
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + node.images.length - 1) %
              node.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % node.images.length)
          }
          enableZoom={false}
          // imageCaption={`Camera: ${
          //   node.images[photoIndex].mediaDetails.meta.camera
          // }, Aperture: f/${
          //   node.images[photoIndex].mediaDetails.meta.aperture
          // }, ISO: ${
          //   node.images[photoIndex].mediaDetails.meta.iso
          // }, Shutter Speed: ${sSpeed(
          //   node.images[photoIndex].mediaDetails.meta.shutterSpeed
          // )}`}
          imageTitle={node.images[photoIndex].caption}
        />
      )}
    </figure>
  )

}

export default GalleryBlock