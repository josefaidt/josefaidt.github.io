import React, { Component, forwardRef } from 'react'
import { Link, graphql as gql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed from 'react-pose'
import Img from 'gatsby-image'
import Layout from 'components/Skeleton'
import Icon from 'components/Icon'
import SEO from 'components/seo'
import theme from 'components/styles/_theme'
import { StyledImage } from 'components/styles/Image.css'
import StyledIcons from 'components/styles/Icon.css'
import StyledBackButton from 'components/Buttons/Back.css'
import Fab from 'components/Buttons/Fab'

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

const StyledBlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const FabMenuold = forwardRef(({ anchorId: { back, twitter, linkedin } }, ref) => (
  <StyledFab ref={ref}>
    <button>
      <div className="fab">
      <p>&plus;</p>
      </div>
    </button>
    <div className="floatUp">
      <Link to={anchorId}>
        <div className="fab">
        <p>twitter</p>
        </div>
      </Link>
      <Link to={anchorId}>
        <div className="fab">
        <p>linkedin</p>
        </div>
      </Link>
    </div>
    <div className="floatLeft">
      <Link to={anchorId}>
        <div className="fab">
        <p>linkedin</p>
        </div>
      </Link>
    </div>
  </StyledFab>
))

function FabMenu ({ anchorId: { back, twitter, linkedin } }) {
  // Declare a new state variable, which we'll call "count"
  // const [open, isOpen] = useState(0)
  const config = {
    draggable: 'x',
    dragBounds: { left: '-100%', right: '100%' }
  }

  return (
    <div>   
      <button pose={config}>
        <div className="fab">
          <p>&plus;</p>
        </div>
      </button>
    </div>
  )
}



// 
// https://twitter.com/intent/tweet?text=VSCode%20&%20Installing%20ESLint%20Globally%20-%20

const BlogPost = ({data: {markdownRemark: post, site: { siteMetadata: meta}}}) => {
  const { id, fields: { slug } } = post
  const blogIdAnchor = `/blog/#${id}`
  const { title, image, tags, description } = post.frontmatter
  const seoTags = [`gatsby`, `josef aidt`, `josef`, `aidt`, `blog`]
  const shareText = encodeURIComponent(title)
  
  const links = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${meta.url}${slug}&title=${shareText}&summary=${encodeURIComponent(description.slice(0, 80) + '...')}&source=${meta.url}`,
    twitter: `https://twitter.com/intent/tweet?url=${meta.url}${slug}&text=${shareText}&hashtags=${tags ? tags : ""}&via=${meta.twitter}`
  }
  return (
    <Layout>
      <SEO
        keywords={seoTags.concat(tags)}
        title={title}
        description={`${description.slice(0, 140)}...`}
        image={image ? image.publicURL : '/_images/logo2.png'}
      />
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        <StyledBlogHeader>
          <Link to={blogIdAnchor}>
            <StyledBackButton>
              <b>BACK</b>
            </StyledBackButton>
          </Link>
          <StyledIcons className="share_icons" height="2rem">
            <Icon
              icon="linkedin"
              link={links.linkedin}
              share
              invert
            />
            <Icon 
              icon="twitter"
              link={links.twitter}
              share
            />
          </StyledIcons>
        </StyledBlogHeader>
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
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? '' : <Fab symbol={'<'} anchorId={blogIdAnchor} />}
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
        tags
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
        title
        url
        twitter
      }
    }
  }
`
