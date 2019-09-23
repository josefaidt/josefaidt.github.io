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
          url
          description
        }
      }
    }
  `)
  return (
    <Skeleton>
      <SEO
        keywords={meta.keywords.join(',')}
        title={meta.title}
        url={meta.url}
        description={`${meta.description.slice(0, 140)}...`}
      />
      <MdxProvider>{props.children}</MdxProvider>
    </Skeleton>
  )
}

export default PageTemplate
