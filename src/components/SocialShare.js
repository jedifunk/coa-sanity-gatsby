import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, EmailShareButton, FacebookIcon, TwitterIcon, PinterestIcon, EmailIcon } from 'react-share'

const SocialShare = ({ socialConfig, title, featuredImage, twitterHandle }) => {
    
    const site = useStaticQuery(query)
    const { siteUrl, siteTitle, hpHero  } = site.sanitySiteSettings

    return(
    <div className="social-share">
        <ul className="social-share-list">
            <li className="social-item">
                <FacebookShareButton 
                    url={`${siteUrl}${socialConfig.config.url}`}
                    quote={`${title} | ${siteTitle}`} 
                    className="facebook"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </li>
            <li className="social-item">
                <TwitterShareButton 
                    url={`${siteUrl}${socialConfig.config.url}`} 
                    via={twitterHandle.split('@').join('')}
                    title={`${title} | ${siteTitle}`}
                    hashtags={["choosingouradventure"]}
                    className="twitter"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </li>
            <li className="social-item">
                <PinterestShareButton 
                    url={`${siteUrl}${socialConfig.config.url}`} 
                    media={featuredImage ? featuredImage.asset.url : hpHero.asset.url}
                    descrption={`${title} | ${siteTitle}`}
                    className="pinterest"
                >
                    <PinterestIcon size={32} round />
                </PinterestShareButton>
            </li>
            <li className="social-item">
                <EmailShareButton
                    url={`${siteUrl}${socialConfig.config.url}`}
                    subject={`${title} | ${siteTitle}`}
                    body={`Interesting article I came across. Check it out.`}
                    className="email"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </li>
        </ul>
    </div>
    )
}

export default SocialShare

const query = graphql`
query SiteMeta {
    sanitySiteSettings {
        siteTitle
        siteUrl
        hpHero {
            asset {
              id
              url
            }
          }
    }
}
`