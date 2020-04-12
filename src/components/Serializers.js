import React from 'react'
import Image from './Image'
import VideoBlock from './Video'
import GalleryBlock from './GalleryBlock'
import MapBlock from './MapBlock'

const serializers = {
  types: {
    imageFull: Image,
    video: VideoBlock,
    gallery: GalleryBlock,
    googleMyMap: MapBlock,
  }
}

export default serializers