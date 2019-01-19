import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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

// const queryJosef = graphql`
//   query {
//     fileName: file(relativePath: { eq: "josef.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const queryTest = graphql`
  query {
    image1: file(relativePath: { eq: "images/josef.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "images/undraw_launch.svg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "images/gatsby-icon.png" }) {
      ...squareImage
    }
  }
`

// const queryLaunch = graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "undraw_launching.svg" }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

// const Image = () => (
//   <StaticQuery
//     query={queryTest}
//     render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
//   />
// )
// export default Image

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/josef.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
