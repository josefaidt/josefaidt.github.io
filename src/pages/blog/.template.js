import React, { Component, forwardRef } from 'react'
import { Link, graphql as gql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import Layout from 'components/Skeleton'
import Icon from 'components/Icon'
import SEO from 'components/seo'
import { StyledImage } from 'components/styles/Image.css'
import theme from 'components/styles/_theme'
import StyledIcons from 'components/styles/Icon.css'

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const StyledBackButton = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  min-width: 100px;
  max-width: 100px;
  text-align: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    letter-spacing: 3px;
    transition: 0.3s ease;
    background-color: #c6797e80;
    border: 0.5px solid #c6797e80;
    color: white;
  }

  &:active {
    background-color: #c6797ebf;
    color: white;
    transition: 0.1s ease;
    letter-spacing: 3px;
  }

  .container {
    padding: 1rem;
    filter: brightness(150%);
    h1 {
      filter: brightness(100%);
    }
  }
  .container:hover {
    filter: brightness(80%);
  }
`

const StyledFab = styled.div`
  .fab {
    width: 70px;
    height: 70px;
    background-color: ${theme.rouge};
    border-radius: 50%;
    box-shadow: 0 6px 10px 0 #666;
    transition: all 0.1s ease-in-out;

    font-size: 50px;
    color: white;
    text-align: center;
    line-height: 70px;
    z-index: 20;

    position: fixed;
    right: 40px;
    bottom: 120px;

    
  }

  .fab p {
    text-align: center;
    padding-right: 0.3rem;
  }

  .fab:hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }
`

const Fab = forwardRef(({ anchorId }, ref) => (
  <StyledFab ref={ref}>
    <Link to={anchorId}>
      <div className="fab">
      <p>&lt;</p>
      </div>
    </Link>
  </StyledFab>
))

const posedFabConfig = {
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 },
  pressEnd: { scale: 1 },
}

const AnimatedFab = ({ anchorId }) => <Fab pose={posedFabConfig} anchorId={anchorId} />



const BlogPost = ({data: {markdownRemark: post, site: { siteMetadata: meta}}}) => {
  const { id, fields: { slug } } = post
  const blogIdAnchor = `/blog/#${id}`
  const { title, image, tags, description } = post.frontmatter
  const seoTags = [`gatsby`, `josef aidt`, `josef`, `aidt`, `blog`]
  return (
    <Layout>
      <SEO
        keywords={seoTags.concat(tags)}
        title="Blog"
        description={`${description.slice(0, 140)}...`}
        image={image ? image.publicURL : '/_images/logo2.png'}
      />
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        <BlogHeader>
          <Link to={blogIdAnchor}>
            <StyledBackButton>
              <b>BACK</b>
            </StyledBackButton>
          </Link>
          <StyledIcons className="share_icons" height="2rem">
            <Icon icon="twitter" link={`${meta.url}${slug}`} share></Icon>
          </StyledIcons>
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
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? '' : <AnimatedFab anchorId={blogIdAnchor} />}
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const query = gql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
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
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`
