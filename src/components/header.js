
import PropTypes from "prop-types"
import React from "react"
import NavBar from '../components/header/NavBar'



const Header = ({ siteTitle }) => (
  <header
  title={ siteTitle }
    
  >
    <div
     
    >
     <NavBar />

    
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
