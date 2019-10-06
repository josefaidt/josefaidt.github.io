import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BlogCard from '../../components/Cards'
import Skeleton from '../../components/Skeleton'
import Quote from '../../components/styles/Quote'
import BlogText from '../../components/BlogText'

const StyledForm = styled.form`
  display: flex;
  margin: 1rem 0 0;

  input {
    margin: 0.2rem;
  }

  input[type='text'] {
    flex-grow: 1;
    border: 2px solid ${props => props.theme.text.concat('CC')};
    padding: 0 0.5rem;
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
      background-color: ${props => props.theme.main.concat('DF')};
      border-color: ${props => props.theme.main};
      transition: all 200ms;
      color: ${props => props.theme.background};
    }
  }
`

const Posts = ({ location, data }) => {
  const {
    site,
    allBlogPost: { edges: allBlogPosts },
  } = data
  const {
    allBlogPost: { edges: keywordEdges },
  } = useStaticQuery(graphql`
    query {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            keywords
          }
        }
      }
    }
  `)
  const posts = allBlogPosts.map(({ node }) => node)
  const keywords = keywordEdges.map(({ node }) => node)
  const allKeywords = new Set(keywords.map(post => post.keywords).flat())
  const [filteredPosts, setFilteredPosts] = React.useState(posts)
  const [searchInput, setSearchInput] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    console.log('EVENT SUBMITTED', event)
    return filterPosts(searchInput)
  }

  const filterPosts = (keyword, clear = false) => {
    console.log('FILTERING', keyword)
    if (clear) return setFilteredPosts([...posts])
    else
      return setFilteredPosts(
        [...posts].filter(post => post.keywords.includes(keyword.toLowerCase()))
      )
  }

  const handleKeyPress = event => {
    if (event.keyCode === 27) {
      // if `esc` key is pressed
      event.target.value = ''
      filterPosts(null, true)
    }
  }

  // filtering
  return (
    <Skeleton>
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
          onKeyPress={handleKeyPress}
        ></input>
        <input type="submit" />
        <input type="reset" value="Reset" onClick={e => filterPosts(null, true)} />
      </StyledForm>
      <div>
        {filteredPosts.map((post, i) => {
          const [{ keywords: postKeywords }] = keywords.filter(({ id }) => post.id === id)
          post.keywords = postKeywords
          return <BlogCard key={i} post={post} />
        })}
      </div>
    </Skeleton>
  )
}

export const PageQuery = graphql`
  query {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          keywords
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default Posts
