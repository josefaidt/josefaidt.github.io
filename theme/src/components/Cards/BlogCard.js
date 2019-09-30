import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeContext } from 'styled-components'
import { StyledPostLink, StyledTagList, StyledTag } from '../styles/Tags.css'

const StyledCard = styled.article`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;
  transition: transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  padding: 1rem;
  color: ${props => props.theme.text};
  /* transition */
  h1,
  p,
  span,
  span.tag {
    color: #8b868c;
    transition: color 0.2s ease;
  }
  /* filters */
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p,
  span#date {
    font-size: 0.8rem;
  }
  span.tag {
    color: white;
    background-color: #8b868c;
    transition: background-color 0.2s linear;
  }
  #date {
    font-style: italic;
  }

  &:hover {
    h1,
    span#date,
    p {
      color: ${props => props.theme.text};
    }
    span.tag {
      background-color: ${props => props.theme.text};
      transition: background-color 0.2s linear;
      color: white;
    }
  }

  @media only screen and (max-width: 760px) {
    margin: 1rem 0.3rem;
  }
`

const renderTags = tags => {
  const hashtagged = tags.map(tag => `#${tag}`)
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
    <StyledPostLink aria-labelledby="post-title" theme={theme}>
      <Link className="link card" to={post.slug} id={post.id}>
        <div className="container">
          <h1 id="post-title">{post.title}</h1>
          {post.keywords ? <StyledTagList>{renderTags(post.keywords)}</StyledTagList> : null}
          <span id="date">{post.date}</span>
          <div className="excerpt-preview">
            <p>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </StyledPostLink>
  )
}

export default BlogCard
export { StyledCard }