import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MdLink = props => {
  if (props.href.startsWith('http')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} />
  } else {
    return <Link to={props.href} {...props} />
  }
}

const StyledMdLink = styled(MdLink)`
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(70%) contrast(80%);
    transition: filter 0.2s ease;
  }
  &:active {
    filter: brightness(70%) contrast(80%);
  }
`

export default StyledMdLink
