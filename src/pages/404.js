import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'

const NotFoundPage = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: "error404 page" }} />
    <div id="primary" className="content-area wrapper">
      <div className="grid-wrapper grid-main">
        <main id="main" className="site-main" role="main">
          <article>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </article>
        </main>
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
