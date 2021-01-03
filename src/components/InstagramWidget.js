// import React from 'react'
// import { StaticQuery, graphql } from "gatsby"

// const IG_QUERY = graphql`
// query GetIgPosts {
//   allInstaNode(sort: {fields: timestamp, order: DESC}) {
//     distinct(field: username)
//     edges {
//       node {
//         id
//         caption
//         thumbnails {
//           src
//         }
//       }
//     }
//   }
// }
// `

// const InstagramWidget = () => (
//   <StaticQuery
//     query={IG_QUERY}
//     render={data => {
//       return (
//         <section id="ig" className="widget widget_instagram">
//           <h2 className="widget-title">Visually Speaking</h2>
//           <div className="grid-wrapper grid-thirds">
//             {data.allInstaNode.edges.map(img => (
//               <div key={img.node.id} className="grid-item">
//                 <a href={`https://instagram.com/p/${img.node.id}`} target="_blank" rel="noopener noreferrer"><img src={img.node.thumbnails[0].src} alt={img.node.caption} /></a>
//               </div>
//             ))}
//           </div>
//           <a href={`https://instagram.com/${data.allInstaNode.distinct}`}>Follow</a>
//         </section>
//       )
//     }}
//   />
// )

// export default InstagramWidget
