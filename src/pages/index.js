import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>CSS UI Components</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Link to="/card"><Image /></Link>
      </div>
      <Link to="/card">Cards</Link>
    </div>
  </Layout>
)

export default IndexPage
