import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeContext } from 'styled-components'
import { StyledTagList, StyledTag } from './Tags.css'
import { StyledCard } from './Card.css'

const renderTags = tags => {
  const hashtagged = tags.map(tag => `#${tag.toLowerCase()}`)
  return (
    <div>
      {hashtagged.map((tag, key) => (
        <StyledTag key={key} className="tag">
          {tag}
        </StyledTag>
      ))}
    </div>
  )
}

const BlogCard = ({ post }) => {
  const theme = React.useContext(ThemeContext)
  return (
    <StyledCard
      aria-labelledby="post-title"
      theme={theme}
      css={`
        color: ${theme.grey || 'black'};
        a {
          text-decoration: none;
        }
      `}
    >
      <Link to={post.slug} id={post.id}>
        <div className="blog--post__container">
          <h1 id="post-title">{post.title}</h1>
          {post.keywords ? <StyledTagList>{renderTags(post.keywords)}</StyledTagList> : null}
          <span id="date">{post.date}</span>
          <div className="blog--post__excerpt">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </StyledCard>
  )
}

export default BlogCard
export { StyledCard }
