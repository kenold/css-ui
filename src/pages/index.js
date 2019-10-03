import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>CSS UI Components</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Link to="cards"><Image /></Link>
      </div>
      <Link to="cards">Cards</Link>
    </div>
  </Layout>
)

export default IndexPage
