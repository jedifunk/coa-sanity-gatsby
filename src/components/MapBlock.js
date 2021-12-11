import React from 'react'

const MapBlock = ({ node }) => {
  return (
    <div className="responsive-map">
      <figure>
        <iframe 
          //width="640"
          height="480"
          src={node.url}
          style={{ width: '100%' }}
          frameBorder="no"
          //allowTransparency
          allowFullScreen
          title="Visited Countries"
        />
      </figure>
    </div>
  )
}

export default MapBlock