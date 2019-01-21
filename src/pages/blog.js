import React, { Component } from 'react'
import { graphql as gql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import Layout from '../components/Skeleton'
import { theme } from '../components/Meta'
import Quote from '../components/styles/Quote'

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
const BLOG_QUERY = gql`
  query BLOG_QUERY {
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

const StyledPostLink = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 1rem;
    color: ${theme.almostblack};
    h1 {
      color: ${theme.almostblack};
      filter: brightness(150%);
      font-size: 2rem;
    }
    p,
    span {
      font-size: 0.8rem;
      filter: brightness(150%);
    }
    #date {
      font-style: italic;
    }
  }
  .excerpt-preview {
    /* max-width: 100%; */
    /* display: flex; */
    /* flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto; */
  }
  .container:hover {
    h1,
    span,
    p {
      filter: brightness(80%);
    }
  }

  @media only screen and (max-width: 760px) {
    margin: 1rem 0.3rem;
  }
`

// const StyledImageSmall = styled.div`
//   max-width: 150px;
//   img {
//     max-height: 100%;
//     max-width: 100%;
//   }
// `

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
        title="Home"
      />
      <h1>Snakes and Sparklers</h1>
      <p>
        Compilation of my thoughts and opinions on all things tech, my experiences in the industry,
        web development, and oxford commas.
      </p>
      <Quote style={{ margin: '0 auto 1rem auto' }}>
        "Snakes and Sparklers are the only ones I like." -Kicking Wing, Joe Dirt (2001)
      </Quote>
      {postList.edges.map(({ node }, i) => (
        <StyledPostLink key={i}>
          <Link className="link card" to={node.fields.slug}>
            <div className="post-list container">
              <h1>{node.frontmatter.title}</h1>
              {/* <Img alt="test" src={node.frontmatter.image} /> */}
              <span className="tags">
                {node.frontmatter.tags ? node.frontmatter.tags.join(' #') : ''}
              </span>
              <span id="date">{node.frontmatter.date}</span>
              {/* <br /> */}
              <div className="excerpt-preview">
                <p>
                  {node.excerpt}
                  {/* <StyledImageSmall> */}
                  {/* {node.frontmatter.image ? (
                    <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                  ) : (
                    ''
                  )} */}
                  {/* </StyledImageSmall> */}
                </p>
              </div>
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
            image {
              name
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage
