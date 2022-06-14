import {format, isFuture} from 'date-fns'

export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture ({publishedAt}) {
  return !isFuture(publishedAt)
}

export function getBlogUrl (publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`
}

export function buildImageObj (source = {asset: {}}) {
  const imageObj = {
    asset: {_ref: source.asset._ref || source.asset._id}
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText (blocks) {
  if (!blocks) {
    return ''
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

// Shutter Speed conversion function
export function sSpeed(d) {
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