import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
//import { GatsbyImage } from 'gatsby-plugin-image'
import { urlFor } from '../lib/ImageUrl'

const IGWidget = () => {
  const data = useStaticQuery(IG_QUERY)
console.log(data)
  return (
    <section className="widget widget-ig">
      <h3 className="widget-title">Visually Speaking</h3>
      <div className="grid-wrapper grid-thirds">
        {data.allInstagramContent.edges.map(item =>
          item.node.localImage && (
            <div key={item.node.id} className='grid-item'>
              <a href={item.node.permalink} target="_blank" rel="noopener noreferrer">

                <img src={item.node.localImage.childImageSharp.fixed.src} width='200' />
              </a>
            </div>
          )
        )}
            
          </div>
        </section>
  )
}
export default IGWidget
// const InstagramWidget = () => (
//   <StaticQuery
//     query={IG_QUERY}
//     render={data => {
//       return (
//         <section className="widget widget-ig">
//           <h3 className="widget-title">Visually Speaking</h3>
//           {/* <p>If you enjoy these images, please follow me <a href={`https://instagram.com/${data.allInstagramContent.distinct}`} target="_blank" rel="noopener noreferrer">@jedifunk</a>.</p> */}
//           <div className="grid-wrapper grid-thirds">
//             {data.allInstagramContent.edges.map(item =>
//               item.node.localImage && (
//                 <div key={item.node.id} className='grid-item'>
//                   <a href={item.node.permalink} target="_blank" rel="noopener noreferrer">
//                     {/* <GatsbyImage
//                       image={item.node.localImage.childImageSharp.gatsbyImageData}
//                       key={item.node.id}
//                       alt={ item.node.caption || 'Instagram Post'}
//                     /> */}
                    
//                   </a>
//                 </div>
//               )
//             )}
            
//           </div>
//         </section>
//       )
//     }}
//   />
// )
// export default InstagramWidget

export const IG_QUERY = graphql`
  query myQuery {
    allInstagramContent(sort: {fields: timestamp, order: DESC}, limit: 9) {
      distinct(field: username)
      edges {
        node {
          id
          permalink
          caption
          localImage {
            childImageSharp {
              fixed(width: 200, height: 200) {
                src
              }
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200, height: 200)
            }
          }
        }
      }
    }
  }
`