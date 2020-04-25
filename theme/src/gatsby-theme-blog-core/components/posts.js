import React from 'react'
import styled from 'styled-components'
import BlogCard from '../../components/Cards'
import Skeleton from '../../components/Skeleton'
import BlogText from '../../components/BlogText'
import SEO from '../../components/seo'

const StyledForm = styled.form`
  display: flex;
  margin: 1rem 0 0;

  @media screen and (max-width: 768px) {
    & {
      flex-wrap: wrap;
    }
  }

  input {
    margin: 0.2rem;
    border-radius: 0.2rem;
  }

  input[type='text'] {
    flex-grow: 1;
    border: 2px solid ${props => props.theme.text.concat('CC')};
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 768px) {
    input[type='text'] {
      width: 100%;
    }
  }

  input:not([type='text']) {
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    text-decoration: none;
    line-height: 1rem;
    border-radius: 0.2rem;

    display: flex;
    align-items: center;

    border: 2px solid ${props => props.theme.text.concat('CC')};
    font-weight: bold;

    &:hover,
    &:active,
    &:focus {
      filter: none;
      background-color: ${props => props.theme.primary.concat('DF')};
      border-color: ${props => props.theme.primary};
      transition: all 200ms;
      color: ${props => props.theme.background};
    }
  }

  @media screen and (max-width: 768px) {
    input[type='submit'] {
      margin-left: auto;
    }
  }
`

const Posts = ({ location, data }) => {
  const {
    allBlogPost: { edges: allBlogPosts },
  } = data
  const posts = allBlogPosts.map(({ node }) => node)
  const [filteredPosts, setFilteredPosts] = React.useState(posts)
  const [searchInput, setSearchInput] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    if (searchInput !== null) {
      return filterPosts(searchInput)
    }
  }

  const filterPosts = (keyword, clear = false) => {
    if (!keyword || clear) return setFilteredPosts([...posts])
    else
      return setFilteredPosts(
        [...posts].filter(post => post.keywords.find(k => new RegExp(keyword).test(k)))
      )
  }

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      // if `esc` key is pressed
      event.target.value = ''
      filterPosts(null, true)
    }
  }

  // filtering
  return (
    <Skeleton>
      <SEO title="Blog" />
      <BlogText />
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="tag-search" className="visually-hidden">
          Blog Post Keyword Search
        </label>
        <input
          id="tag-search"
          name="tag-search"
          type="text"
          formAction="submit"
          placeholder="Tag Search (e.g. JavaScript)"
          onChange={e => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        ></input>
        <input type="submit" value="Apply" />
        <input type="reset" value="Reset" onClick={e => filterPosts(null, true)} />
      </StyledForm>
      <div>
        {filteredPosts.map((post, i) => {
          return <BlogCard key={i} post={post} />
        })}
      </div>
    </Skeleton>
  )
}

export default Posts
