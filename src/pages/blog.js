import React, { Component } from 'react'
import { graphql as gql, Link } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/Skeleton'
import { theme } from '../components/Meta'

const ALL_BLOG_QUERY = gql`
  query ALL_BLOG_QUERY {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          html
        }
      }
    }
  }
`

const StyledPostLink = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    /* background-color: red; */
  }

  .container {
    padding: 2px 16px;
    color: ${theme.almostblack};
    filter: brightness(150%);
    h1 {
      color: ${theme.almostblack};
      filter: brightness(100%);
    }
  }
  .container:hover {
    filter: brightness(80%);
  }
`

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
        title="Home"
      />
      <h1>Snakes and Sparklers</h1>
      {postList.edges.map(({ node }, i) => (
        <StyledPostLink key={i}>
          <Link className="link card" to={node.fields.slug}>
            <div className="post-list container">
              <h1>{node.frontmatter.title}</h1>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        </StyledPostLink>
      ))}
    </Layout>
  )
}

export const listQuery = gql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`

export default BlogPage
