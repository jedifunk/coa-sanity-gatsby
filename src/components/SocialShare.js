import React from 'react'
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, FacebookIcon, TwitterIcon, PinterestIcon, } from 'react-share'

const SocialShare = ({ socialConfig, title, featuredImage, twitterHandle }) => {
    
    return(
    <div className="social-share">
        <ul className="social-share-list">
            <li className="social-item">
                <FacebookShareButton 
                    url={socialConfig.config.url} 
                    quote={title} 
                    className="facebook"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </li>
            <li className="social-item">
                <TwitterShareButton 
                    url={socialConfig.config.url} 
                    via={twitterHandle.split('@').join('')}
                    title={title}
                    hashtags={["choosingouradventure"]}
                    className="twitter"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            </li>
            <li className="social-item">
                <PinterestShareButton 
                    url={socialConfig.config.url} 
                    media={featuredImage && featuredImage.sourceUrl}
                    className="pinterest"
                >
                    <PinterestIcon size={32} round />
                </PinterestShareButton>
            </li>
        </ul>
    </div>
    )
}

export default SocialShare