import React from "react"
import RecentPostsWidget from "./RecentPostsWidget"
import LocationsWidget from './LocationsWidget'
import CategoriesWidget from "./CategoriesWidget"
import InstagramWidget from "./Instagram"

const Sidebar = props => (

    <aside id="secondary" className="widget-area sidebar">
      <RecentPostsWidget />
      <LocationsWidget />
      <CategoriesWidget />
      <InstagramWidget />
    </aside>

)

export default Sidebar
