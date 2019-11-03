import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Skeleton from '../components/Skeleton'
import Icon from '../components/Icon'
import SEO from '../components/seo'
import Icons from '../components/Icon/Icons'
import Button from '../components/Button'
import MdxProvider from '../components/MDXProvider'

const StyledBlogHeader = styled.header`
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
  const {
    site: {
      siteMetadata: { keywords: metaKeywords },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          keywords
        }
      }
    }
  `)
  const theme = React.useContext(ThemeContext)
  const { id, slug } = post
  const blogIdAnchor = `/blog/#${id}`
  const { title, image, keywords, excerpt } = post
  const seoTags = [`blog`].concat(metaKeywords)
  const shareText = encodeURIComponent(title)
  const twitterUsername = meta.social
    .filter(s => s.name.toLowerCase() === 'twitter')[0]
    .url.split('/')
    .pop()

  const links = {
    blogIdAnchor,
    linkedinDeep: `linkedin://shareArticle?mini=true&url=${
      meta.siteUrl
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${excerpt}.slice(0, 80)}...`
    )}&source=${meta.siteUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${
      meta.siteUrl
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${excerpt}.slice(0, 80)}...`
    )}&source=${meta.siteUrl}`,
    twitterDeep: `twitter://intent/tweet?url=${
      meta.siteUrl
    }${slug}&text=${shareText}&hashtags=${keywords || ''}&via=${twitterUsername}`,
    twitter: `https://twitter.com/intent/tweet?url=${
      meta.siteUrl
    }${slug}&text=${shareText}&hashtags=${keywords || ''}&via=${twitterUsername}`,
  }

  return (
    <Skeleton>
      <SEO
        keywords={seoTags.concat(keywords)}
        title={title}
        siteUrl={`${meta.siteUrl}${slug}`}
        description={`${excerpt.slice(0, 140)}...`}
        image={image ? image.publicURL : ''}
      />
      <article>
        <StyledBlogHeader>
          <Button.back anchor={blogIdAnchor} />
          <Icons theme={theme}>
            <Icon icon="linkedin" link={links.linkedin} share invert />
            {twitterUsername ? <Icon icon="twitter" link={links.twitter} share /> : null}
          </Icons>
        </StyledBlogHeader>
        <div>
          <header>
            <h1>{title}</h1>
            <span className="date" style={{ position: 'relative', top: '-1rem' }}>
              {post.date}
            </span>
          </header>
          <MdxProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MdxProvider>
        </div>
      </article>
    </Skeleton>
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
