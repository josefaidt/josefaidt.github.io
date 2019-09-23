import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Skeleton'
import Icon from '../components/Icon'
import SEO from '../components/seo'
import StyledIcons from '../components/Icon/Icon.css'
import Button from '../components/Button'

const StyledBlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const BlogPost = ({
  data: {
    blogPost: post,
    site: { siteMetadata: meta },
  },
}) => {
  const { id, slug } = post
  const blogIdAnchor = `/blog/#${id}`
  const { title, image, tags, excerpt } = post
  const seoTags = [`gatsby`, `josef aidt`, `josef`, `aidt`, `blog`]
  const shareText = encodeURIComponent(title)
  const twitterUsername = meta.social
    .filter(s => s.name.toLowerCase() === 'twitter')[0]
    .url.split('/')
    .pop()

  const links = {
    blogIdAnchor,
    linkedinDeep: `linkedin://shareArticle?mini=true&url=${
      meta.url
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${excerpt}.slice(0, 80)}...`
    )}&source=${meta.url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${
      meta.url
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${excerpt}.slice(0, 80)}...`
    )}&source=${meta.url}`,
    twitterDeep: `twitter://intent/tweet?url=${meta.url}${slug}&text=${shareText}&hashtags=${tags ||
      ''}&via=${twitterUsername}`,
    twitter: `https://twitter.com/intent/tweet?url=${
      meta.url
    }${slug}&text=${shareText}&hashtags=${tags || ''}&via=${twitterUsername}`,
  }
  return (
    <Layout isBlog>
      <SEO
        keywords={seoTags.concat(tags)}
        title={title}
        url={`${meta.url}${slug}`}
        description={`${excerpt}.slice(0, 140)}...`}
        image={image ? image.publicURL : '/_images/logo2.png'}
      />
      <article>
        <StyledBlogHeader>
          <Button.back anchor={blogIdAnchor} />
          <StyledIcons className="share_icons" height="2rem">
            <Icon icon="linkedin" link={links.linkedin} share invert />
            <Icon icon="twitter" link={links.twitter} share />
          </StyledIcons>
        </StyledBlogHeader>
        <div>
          <header>
            <h1>{title}</h1>
            <span className="date" style={{ position: 'relative', top: '-1rem' }}>
              {post.date}
            </span>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.object.isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogPost
