import React from 'react'
import { Link } from "gatsby"
import { usePagination, DOTS } from '../lib/usePagination'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const ArchivePagination = props => {
  const {
    numPages,
    siblingCount = 1,
    currentPage,
  } = props.details

  const paginationRange = usePagination({
    currentPage,
    numPages,
    siblingCount,
  })

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <nav className="navigation post-navigation" role="navigation">
        
      <div className="nav-previous"> 
      {!isFirst && (
        <>
        <FaAngleLeft />
        <Link to={`/${prevPage}`} rel="prev">Newer Posts</Link>
        </>
      )}
      </div>

      <ul className={`nav-paged`} >

        {paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return <li key={i} className="dots">&#8230;</li>
          }

          return (
            <li key={i}>
              <Link className={`${pageNumber === currentPage ? 'current' : ''}`} to={`/${i === 0 ? '' : pageNumber}`} >
                {pageNumber}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="nav-next">
      {!isLast && (
        <>
        <Link to={`/${nextPage}`} rel="next">Older Posts</Link>
        <FaAngleRight />
        </>
      )}
      </div>

    </nav>
  )
}

export default ArchivePagination