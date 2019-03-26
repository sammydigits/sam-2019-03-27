import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <Navigation />
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
