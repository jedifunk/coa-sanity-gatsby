import React from "react"
import RecentPostsWidget from "./RecentPostsWidget"
import LocationsWidget from './CountryWidget'
import CategoriesWidget from "./CategoriesWidget"
import InstagramWidget from "./InstagramWidget"

const Sidebar = props => {

  return (
    <aside id="secondary" className="widget-area sidebar">
      {props.page === 'archive' && props.current === 1 ? null : <RecentPostsWidget />}
      <LocationsWidget />
      <CategoriesWidget />
      <InstagramWidget />
    </aside>
  )
}

export default Sidebar
