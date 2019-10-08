import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Icons from '../Icon/Icons'
import Icon from '../Icon'

const FooterIcons = props => {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `)
  return (
    <Icons iconHeight="1.3rem">
      {social.map(({ name, url }) => (
        <>
          <Icon icon={name.toLowerCase()} link={url} />
        </>
      ))}
    </Icons>
  )
}

export default FooterIcons
