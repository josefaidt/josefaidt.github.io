import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { ShortLine } from './styles/Line'
import { StyledHeader } from './styles/Header.css'

const AnimatedHeader = posed(StyledHeader)({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 200,
    },
  },
  exit: {
    opacity: 1,
    y: -100,
    transition: {
      ease: 'linear',
    },
  },
})

const Header = ({ siteTitle, children }) => (
  <AnimatedHeader>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
          {/* <br />
          <span>Full-Stack JavaScript Developer</span> */}
        </Link>
      </h1>
    </div>
    {children}
    {typeof window !== 'undefined' && window.innerWidth >= 760 ? '' : <ShortLine />}
  </AnimatedHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `josefaidt`,
}

export default Header
