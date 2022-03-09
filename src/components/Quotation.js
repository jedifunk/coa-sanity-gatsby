import React from 'react'

const Quotation = ({ node }) => {

  return (
    <figure className='quotation'>
      <blockquote>{node.quote}</blockquote>
      <figcaption>{node.author}, <cite>{node.source}</cite></figcaption>
    </figure>
  )

}
export default Quotation