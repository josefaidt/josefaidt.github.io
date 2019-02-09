import React, { Component } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const PushpinIcon = ({ link }) => (
  <div className="icon">
    <OutboundLink href={link} rel="noopener noreferrer" target="_blank">
      <svg
        height="32"
        version="1.1"
        viewBox="0 0 32 32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>pushpin</title>
        <path d="M17 0l-3 3 3 3-7 8h-7l5.5 5.5-8.5 11.269v1.231h1.231l11.269-8.5 5.5 5.5v-7l8-7 3 3 3-3-15-15zM14 17l-2-2 7-7 2 2-7 7z" />
      </svg>
    </OutboundLink>
  </div>
)

export default PushpinIcon
