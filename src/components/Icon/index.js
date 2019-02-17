import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import FilePdfIcon from './FilePdfIcon'
import GithubIcon from './GithubIcon'
import LinkedInIcon, { LinkedInIconInverted } from './LinkedinIcon'
import PushpinIcon from './PushpinIcon'
import SpotifyIcon from './SpotifyIcon'
import TwitterIcon from './TwitterIcon'

const PlaceholderIcon = styled.div`
  height: 32px;
  width: 32px;
  background-color: black;
  border-radius: 5px;
`

const renderIcon = (icon, invert) => {
  switch (icon) {
    case 'pdf':
      return <FilePdfIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      if (!invert) {
        return <LinkedInIcon />
      } else {
        return <LinkedInIconInverted />
      }
    case 'pushpin':
      return <PushpinIcon />
    case 'spotify':
      return <SpotifyIcon />
    case 'twitter':
      return <TwitterIcon />
    default:
      return <PlaceholderIcon />
  }
}

const Icon = props => {
  return (
    <div className="icon">
      <OutboundLink
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
        download={props.icon === 'pdf'}
        {...props}
      >
        {renderIcon(props.icon, props.invert)}
        {props.share ? <span className="share">&rang;</span> : null}
      </OutboundLink>
    </div>
  )
}

Icon.propTypes = {
  share: PropTypes.bool,
  invert: PropTypes.bool,
  icon: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
}

export default Icon

export { FilePdfIcon, GithubIcon, LinkedInIcon, PushpinIcon, SpotifyIcon, TwitterIcon }
