import React, { useState } from "react"
import SanityImage from 'gatsby-plugin-sanity-image'
import Lightbox from 'react-image-lightbox'
import {BiExpandAlt} from 'react-icons/bi'
import { sSpeed } from "../lib/Helpers"
import 'react-image-lightbox/style.css'

const GalleryBlock = ({ node }) => {
  
  // check for null value... mostly for older posts that randomly return null
  const cols = (node.columns != null) ? node.columns : 3

  // Set State for Lightbox
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`blocks-gallery-grid columns-${cols}`}>
        {node.images.map((img, index) => {
          // setup onclick function to handle state change
          function updateOnClick() {
            setPhotoIndex(index)
            setIsOpen(true)
          }
          
          return (
            <figure key={index} className="blocks-gallery-item">
              <button onClick={updateOnClick}>
                <BiExpandAlt className='enlarge'/>
                <SanityImage {...img} width={500} />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </button>
            </figure>
          )
        })}
      </div>

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
          imageCaption={`Camera: ${
            node.images[photoIndex].asset.metadata.exif.LensModel 
          }, Aperture: f/${
            node.images[photoIndex].asset.metadata.exif.FNumber
          }, ISO: ${
            node.images[photoIndex].asset.metadata.exif.ISO
          }, Shutter Speed: ${sSpeed(
            node.images[photoIndex].asset.metadata.exif.ExposureTime
          )}`}
          imageTitle={node.images[photoIndex].caption}
        />
      )}
    </>
  )

}

export default GalleryBlock