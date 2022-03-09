import Image from './image'
import VideoBlock from './Video'
import VideoEmbedBlock from './VideoEmbedBlock'
import GalleryBlock from './GalleryBlock'
import MapBlock from './MapBlock'
import InstagramBlock from './InstagramBlock'
import Mapbox from './Mapbox'
import Quotation from './Quotation'

const serializers = {
  types: {
    imageFull: Image,
    video: VideoBlock,
    gallery: GalleryBlock,
    googleMyMap: MapBlock,
    instagramPost: InstagramBlock,
    videoEmbed: VideoEmbedBlock,
    mapbox: Mapbox,
    quotation: Quotation,
  }
}

export default serializers