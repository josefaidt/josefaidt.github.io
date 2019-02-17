import React, { Component, forwardRef, useState } from 'react'
import { Link, graphql as gql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from 'components/Skeleton'
import Icon from 'components/Icon'
import SEO from 'components/seo'
import { StyledImage } from 'components/styles/Image.css'
import StyledIcons from 'components/styles/Icon.css'
import StyledBackButton from 'components/Buttons/Back.css'
import { FabMenu } from 'components/Buttons/Fab'

const StyledBlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

// https://twitter.com/intent/tweet?text=VSCode%20&%20Installing%20ESLint%20Globally%20-%20
const BlogPost = ({
  data: {
    markdownRemark: post,
    site: { siteMetadata: meta },
  },
}) => {
  const {
    id,
    fields: { slug },
  } = post
  const blogIdAnchor = `/blog/#${id}`
  const { title, image, tags, description } = post.frontmatter
  const seoTags = [`gatsby`, `josef aidt`, `josef`, `aidt`, `blog`]
  const shareText = encodeURIComponent(title)

  const links = {
    blogIdAnchor,
    linkedin: `linkedin://shareArticle?mini=true&url=${
      meta.url
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${description.slice(0, 80)}...`
    )}&source=${meta.url}`,
    linkedinDesktop: `https://www.linkedin.com/shareArticle?mini=true&url=${
      meta.url
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${description.slice(0, 80)}...`
    )}&source=${meta.url}`,
    twitter: `twitter://intent/tweet?url=${meta.url}${slug}&text=${shareText}&hashtags=${tags ||
      ''}&via=${meta.twitter}`,
    twitterDesktop: `https://twitter.com/intent/tweet?url=${
      meta.url
    }${slug}&text=${shareText}&hashtags=${tags || ''}&via=${meta.twitter}`,
  }
  return (
    <Layout isBlog>
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
            <Icon icon="linkedin" link={links.linkedin} share invert />
            <Icon icon="twitter" link={links.twitter} share />
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
      {typeof window !== 'undefined' && window.innerWidth >= 760 ? (
        ''
      ) : (
        <FabMenu symbol={'+'} {...links} />
      )}
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
