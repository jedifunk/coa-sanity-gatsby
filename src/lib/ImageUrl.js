import config from '../../config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(config.source)

export function urlFor(incoming) {
  return builder.image(incoming)
}
