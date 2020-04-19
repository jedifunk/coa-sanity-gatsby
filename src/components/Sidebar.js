import React from "react"
import RecentPostsWidget from "./RecentPostsWidget"
import LocationsWidget from './LocationsWidget'
import CategoriesWidget from "./CategoriesWidget"
import InstagramWidget from "./InstagramWidget"
import { checkPropTypes } from "prop-types"

const Sidebar = props => {

  return (
    <aside id="secondary" className="widget-area sidebar">
      {props.page > 1 &&  <RecentPostsWidget /> }
      <LocationsWidget />
      <CategoriesWidget />
      <InstagramWidget />
    </aside>
  )
}

export default Sidebar
