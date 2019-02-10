import React from 'react'
import { graphql as gql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { StyledImage } from './styles/Image.css'
import SEO from './seo'
import Layout from './Skeleton'

const MdxPageTemplate = ({ data: { mdx } }) => {
  const { title, image, tags, description } = mdx.frontmatter
  const seoTags = [`gatsby`, `josef aidt`, `josef`, `aidt`, `blog`]
  return (
    <Layout>
      <SEO
        keywords={seoTags.concat(tags)}
        title="Blog"
        description={description ? `${description.slice(0, 140)}...` : ''}
        image={image ? image.publicURL : '/_images/logo2.png'}
      />
      <h1>{title}</h1>
      <StyledImage>{image ? <Img fluid={image.childImageSharp.fluid} /> : ''}</StyledImage>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </Layout>
  )
}

MdxPageTemplate.props = {
  data: PropTypes.object.isRequired,
}

export default MdxPageTemplate

export const query = gql`
  query MdxPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        description
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
  }
`
