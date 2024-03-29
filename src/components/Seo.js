import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const SEO = ({title, description, image, article}) => {

  const {pathname} = useLocation()
  const site = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.sanitySiteSettings

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image.asset.url} />
      <link rel="canonical" href={seo.url} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image.asset.url} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image.asset.url} />}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    sanitySiteSettings {
      defaultTitle: siteTitle
      titleTemplate
      siteUrl
      defaultImage: hpHero {
        asset {
          id
          url
        }
      }
      defaultDescription: metaDescription
      twitterHandle
    }
  }
`