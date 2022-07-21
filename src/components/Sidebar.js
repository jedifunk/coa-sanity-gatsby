import React from "react"
import RecentPostsWidget from "./RecentPostsWidget"
import LocationsWidget from './CountryWidget'
import CategoriesWidget from "./CategoriesWidget"
import InstagramWidget from "./InstagramWidget"

const Sidebar = props => {

  return (
    <aside id="secondary" className="sidebar">
      <CategoriesWidget />
      <LocationsWidget />
      {props.page === 'archive' && props.current === 1 ? null : <RecentPostsWidget />}
      <InstagramWidget />
    </aside>
  )
}

export default Sidebar
