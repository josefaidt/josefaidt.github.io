import React from 'react'
import { graphql as gql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import Img from 'gatsby-image'
import OutboundLink from 'gatsby-plugin-google-analytics'
import { StyledImage } from './styles/Image.css'
import SEO from './seo'
import Layout from './Skeleton'
import Quote from './styles/Quote'

const shortcodes = {
  quote: Quote,
  Link,
  OutboundLink,
}

const MdxPageTemplate = ({ children, pageContext }) => {
  const { title } = pageContext.frontmatter
  // const seoTags = [`gatsby`, `josef aidt`, `josef`, `aidt`, `blog`]
  return (
    <Layout>
      <SEO
        // keywords={seoTags.concat(tags)}
        title={title}
        // description={description ? `${description.slice(0, 140)}...` : ''}
        // image={image ? image.publicURL : '/_images/logo2.png'}
      />
      {title.toLowerCase() === 'home' ? null : <h1>{title}</h1>}
      {/* <StyledImage>{image ? <Img fluid={image.childImageSharp.fluid} /> : ''}</StyledImage> */}
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  )
}

MdxPageTemplate.props = {
  data: PropTypes.object.isRequired,
}

export default MdxPageTemplate
