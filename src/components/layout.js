/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaGithub } from 'react-icons/fa';

import Header from "./header"
import "./layout.scss"
import "../styles/main.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="main__footer">
          <div className="container">
            © {new Date().getFullYear()} by
            {` `}
            <a href="https://twitter.com/kenoldb" target="_blank" rel="noopener noreferrer">&nbsp;Kenold Beauplan</a>
            <ul className="footer__links">
              <li className="footer__link">Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby JS</a></li>
              <li className="footer__link">Hosted on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></li>
              <li className="footer__link">See <a href="https://github.com/kenold/css-ui" target="_blank" rel="noopener noreferrer"><FaGithub /> Github Repo</a></li>
              <li className="footer__link">View <Link to="/card/examples">Card Examples</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
