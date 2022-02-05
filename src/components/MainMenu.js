import React, { useEffect, useState } from 'react'
import Nav from "./Navigation"

const MainMenu = () => {
  const [active, setActive] = useState(false)

  // add/remove click event handler to the document
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     const container = document.querySelector(`.burger`)
  //     if (container.contains(target)) return
  //       setActive(false)
  //   }

  //   document.addEventListener("click", clickHandler)

  //   // these functions clean up the event listeners
  //   return () => document.removeEventListener("click", clickHandler)
  // })

  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return
      setActive(false)
    }
    document.addEventListener("keydown", keyHandler)

    return () => document.removeEventListener("keydown", keyHandler)
  })

  return (
    <>
    <button className={`burger ${active ? "active" : ""}`} aria-label="Menu Button" onClick={() => {setActive(!active)}}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className={`menu-wrapper flex flex-column ${active ? "active" : ""}`}>
      <Nav />
    </div>
    </>
  )
}

export default MainMenu