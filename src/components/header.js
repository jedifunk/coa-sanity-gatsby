import React, { useEffect } from "react"
import { Link } from 'gatsby'
import MainMenu from "./MainMenu"
//import Nav from "./Navigation"
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
    <header className="site-header">
      <div className="wrapper">
        <div className="site-branding"><h1 className="site-title"><Link to="/">Choosing Our Adventure</Link></h1></div>
          <MainMenu />
          {/* <SearchInput /> */}
        </div>
    </header>
  )
  
}

export default Header