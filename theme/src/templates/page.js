import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Skeleton from '../components/Skeleton'
import SEO from '../components/seo'
import MdxProvider from '../components/MDXProvider'

const PageTemplate = props => {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(graphql`
    query PAGE_SEO {
      site {
        siteMetadata {
          title
          keywords
          siteUrl
          description
        }
      }
    }
  `)
  return (
    <Skeleton>
      <SEO
        keywords={meta.keywords}
        title={meta.title}
        siteUrl={meta.siteUrl}
        description={`${meta.description.slice(0, 140)}...`}
      />
      <MdxProvider>{props.children}</MdxProvider>
    </Skeleton>
  )
}

export default PageTemplate
