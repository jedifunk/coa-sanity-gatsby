import React, { useEffect } from "react"
import { Link } from 'gatsby'
import Nav from "./Navigation"
//import SearchInput from "./Search/input"


const Header = () => {

  // Scroll function
  const HeaderScroll = () => {
    const heroHeight = 44
    const header = document.querySelector('.site-header')
    let scrollPosition = 0

    window.onscroll = () => {

      scrollPosition = window.pageYOffset
      let condition = scrollPosition > heroHeight

      header.classList.toggle('scrolled', !!condition)

    }
  }

  useEffect(() => {
    HeaderScroll()
  })
  
  return(
    <header id="masthead" className="site-header" role="banner">
      <div className="wrapper flex-wrapper">
        <div className="site-branding"><h1 className="site-title"><Link to="/">Choosing Our Adventure</Link></h1></div>
          <Nav />
          {/* <SearchInput /> */}
        </div>
    </header>
  )
  
}

export default Header