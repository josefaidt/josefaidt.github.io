import React, { Component } from 'react'
import { Link, graphql as gql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from 'components/Skeleton'
import SEO from 'components/seo'
import { StyledImage } from 'components/styles/Image.css'
import { BlogHeader, StyledBackButton, StyledFab } from './template.css'

const Fab = () => (
  <StyledFab>
    <Link to="/blog/">
      <div className="fab" data-original-title="Create" data-placement="left" data-toggle="tooltip">
        <p className="plus">{'<'}</p>
      </div>
    </Link>
  </StyledFab>
)

const BlogPost = props => {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter
  const { image } = post.frontmatter
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
        title="Blog"
      />
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        <BlogHeader>
          <Link to="/blog/">
            <StyledBackButton>
              {/* <button> */}
              <b>BACK</b>
              {/* </button> */}
            </StyledBackButton>
          </Link>
        </BlogHeader>
      ) : (
        ''
      )}
      <div>
        <h1>{title}</h1>
        <StyledImage>
          {image ? <Img fluid={post.frontmatter.image.childImageSharp.fluid} /> : ''}
        </StyledImage>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? '' : <Fab />}
    </Layout>
  )
}

export default BlogPost

export const query = gql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            # resize(width: 1500, height: 1500) {
            #   src
            # }
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
