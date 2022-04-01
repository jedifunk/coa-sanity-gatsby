import React from 'react'

const Quotation = ({ node }) => {

  return (
    <figure className='quotation'>
      <blockquote>{node.quote}</blockquote>
      <figcaption>{node.author}, <cite>{node.url ? (<a href={node.url}>{node.source}</a>) : node.source}</cite></figcaption>
    </figure>
  )

}
export default Quotation