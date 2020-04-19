import Image from './Image'
import VideoBlock from './Video'
import GalleryBlock from './GalleryBlock'
import MapBlock from './MapBlock'
import InstagramBlock from './InstagramBlock'

const serializers = {
  types: {
    imageFull: Image,
    video: VideoBlock,
    gallery: GalleryBlock,
    googleMyMap: MapBlock,
    instagramPost: InstagramBlock
  }
}

export default serializers