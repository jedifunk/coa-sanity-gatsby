import React from "react"
import { Link } from "gatsby"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const ArchivePagination = ({ details }) => {

  const {
    currentPage,
    numPages,
  } = details

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <nav className="navigation post-navigation" role="navigation">
      <div className="nav-links">

        <div className="nav-previous"> 
        {!isFirst && ( 
          <Link to={prevPage} rel="prev">
            <FaAngleLeft /> Newer Posts
          </Link>
        )}
        </div>

        <ul className={`nav-paged`}>
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`} >
            <Link to={`/${i === 0 ? '' : i + 1}`} >
              {i + 1}
            </Link>
          </li>
        ))}
        </ul>

        <div className="nav-next">
        {!isLast && (
          <Link to={nextPage} rel="next">
            Older Posts <FaAngleRight />
          </Link>
        )}
        </div>

      </div>
    </nav>
  )
}

export default ArchivePagination
