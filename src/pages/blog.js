import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql as gql, Link } from 'gatsby'
import SEO from 'components/seo'
import Layout from 'components/Skeleton'
import Quote from 'components/styles/Quote'
import { StyledPostLink, StyledTagList, StyledTag } from 'components/styles/Tags.css'

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
            tags
          }
        }
      }
    }
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

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark.edges
  const nodeArr = postList.filter(({ node }) => node.frontmatter.tags !== null)
  const allTags = []
  nodeArr.forEach(o => {
    // iterate over node object tags
    o.node.frontmatter.tags.forEach(t => {
      allTags.push(t)
    })
  })

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`, `blog`]}
        title="Blog"
      />
      <h1>Snakes and Sparklers</h1>
      <p>
        Compilation of my thoughts and opinions on all things tech, my experiences in the industry,
        web development, and oxford commas.
      </p>
      <Quote style={{ margin: '0 auto 1rem auto' }}>
        "Snakes and Sparklers are the only ones I like." -Kicking Wing, Joe Dirt (2001)
      </Quote>
      {/* <StyledTagList>{renderTags(allTags)}</StyledTagList> */}
      {postList.map(({ node }, i) => {
        const { slug } = node.fields
        const post = node.frontmatter
        return (
          <StyledPostLink key={i}>
            <Link className="link card" to={slug}>
              <div className="post-list container">
                <h1>{post.title}</h1>
                {/* <Img alt="test" src={node.frontmatter.image} /> */}
                {post.tags ? <StyledTagList>{renderTags(post.tags)}</StyledTagList> : ''}
                {/* <br /> */}
                <span id="date">{post.date}</span>
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
        )
      })}
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
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
            tags
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
