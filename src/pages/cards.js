import React from "react"
import { Link } from "gatsby"
import Blog from '../components/cards/blog';
import '../styles/cards.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Cards" />
    <h1>Cards</h1>
    <Blog />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
