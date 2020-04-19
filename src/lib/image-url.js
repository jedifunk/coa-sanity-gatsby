import config from '../../config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(config.source)

export function urlFor (source) {
  return builder.image(source)
}