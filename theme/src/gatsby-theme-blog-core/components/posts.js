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
  const { site, allBlogPost } = data
  const keywords = useStaticQuery(graphql`
    query {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
        edges {
          node {
            keywords
          }
        }
      }
    }
  `)

  // attach keywords to their respective posts
  allBlogPost.edges.map(({ node: post }, i) => {
    post.keywords = keywords.allBlogPost.edges[i].node.keywords
  })
  const baseState = allBlogPost.edges.map(({ node }) => node)
  const allKeywords = new Set(baseState.map(post => post.keywords).flat())
  console.log('ALL KEYWORDS', allKeywords)
  // filtered State for tag filtering
  const [filteredPosts, setFilteredPosts] = React.useState(baseState)
  // const [filteredKeywords, setFilteredKeywords] = React.useState(null)
  console.log(filteredPosts)

  const filterPosts = (keyword, clear = false) => {
    console.log('FILTERING', keyword)
    if (clear) return setFilteredPosts([...baseState])
    else
      return setFilteredPosts(
        [...baseState].filter(post => post.keywords.includes(keyword.toLowerCase()))
      )
  }

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      // if `enter` key is pressed
      filterPosts(event.target.value)
    } else if (event.keyCode === 27) {
      // if `esc` key is pressed
      event.target.value = ''
      filterPosts(null, true)
    }
  }

  // filtering
  return (
    <Skeleton>
      <BlogText />
      <StyledForm>
        <label htmlFor="tag-search" className="visually-hidden">
          Blog Post Keyword Search
        </label>
        <input
          id="tag-search"
          name="tag-search"
          type="text"
          formAction="submit"
          placeholder="Tag Search (e.g. JavaScript)"
          value={this}
          onKeyDown={e => handleKeyPress(e)}
        ></input>
        <input type="Submit" />
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
