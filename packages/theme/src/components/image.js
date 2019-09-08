import React from 'react'
import { StaticQuery, graphql as gql } from 'gatsby'
import Img from 'gatsby-image'
import { StyledImage } from './styles/Image.css'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ALL_IMAGE_QUERY = gql`
  query ALL_IMAGE_QUERY {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            original {
              width
              height
              src
            }
            resize(width: 150, height: 150) {
              src
            }
          }
        }
      }
    }
  }
`

const IMAGE_JOSEF_QUERY = gql`
  query IMAGE_JOSEF_QUERY {
    fileName: file(name: { eq: "josef_w" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image = () => (
  <StyledImage>
    <StaticQuery
      query={IMAGE_JOSEF_QUERY}
      render={data => <Img fluid={data.fileName.childImageSharp.fluid} />}
    />
  </StyledImage>
)

export default Image
