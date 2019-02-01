import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql as gql, Link } from 'gatsby'
import styled from 'styled-components'
import chunk from 'lodash/chunk'
import SEO from 'components/seo'
import Layout from 'components/Skeleton'
import theme from 'components/styles/theme'
import Quote from 'components/styles/Quote'
import { StyledPostLink, StyledTagList, StyledTag } from 'components/styles/Tags.css'
import { StyledLoadButton } from 'components/styles/buttons'

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

if (typeof window !== `undefined`) {
  window.postsToShow = 5
}

class BlogPage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.object,
    }),
  }

  constructor() {
    super()
    let postsToShow = 4
    if (typeof window !== `undefined`) {
      // eslint-disable-next-line prefer-destructuring
      postsToShow = window.postsToShow
    }

    this.state = {
      showingMore: postsToShow > 10,
      postsToShow,
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.postsToShow = this.state.postsToShow
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight - (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ postsToShow: this.state.postsToShow + 10 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  render() {
    const postList = this.props.data.allMarkdownRemark.edges
    const posts = postList.map(e => e.node)
    const nodeArr = postList.filter(({ node }) => node.frontmatter.tags !== null)
    const allTags = []
    nodeArr.forEach(o => {
      // iterate over node object tags
      o.node.frontmatter.tags.forEach(t => {
        allTags.push(t)
      })
    })

    return (
      <Layout location={this.props.location}>
        <SEO
          description="Snakes and Sparklers - A compilation of my thoughts and opinions on all things tech, my experiences in the
          industry, web development, and oxford commas."
          keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`, `blog`]}
          title="Blog"
        />
        <h1>Snakes and Sparklers</h1>
        <p>
          Compilation of my thoughts and opinions on all things tech, my experiences in the
          industry, web development, and oxford commas.
        </p>
        <Quote style={{ margin: '0 auto 1rem auto' }}>
          "Snakes and Sparklers are the only ones I like." -Kicking Wing, Joe Dirt (2001)
        </Quote>
        <div
          css={{
            display: `flex`,
            alignItems: `stretch`,
            flexShrink: 0,
            flexDirection: `column`,
          }}
        >
          {/* posts */}
          {chunk(posts.slice(0, this.state.postsToShow), 3).map((chunk, i) => (
            <div
              key={`chunk-${i}`}
              // css={{
              //   display: `flex`,
              //   alignItems: `stretch`,
              //   flexShrink: 0,
              //   flexDirection: `row`,
              // }}
            >
              {chunk.map((node, x) => {
                const { slug } = node.fields
                const post = node.frontmatter
                return (
                  <StyledPostLink key={x}>
                    <Link className="link card" to={slug}>
                      <div className="post-list container">
                        <h1>{post.title}</h1>
                        {post.tags ? <StyledTagList>{renderTags(post.tags)}</StyledTagList> : ''}
                        <span id="date">{post.date}</span>
                        <div className="excerpt-preview">
                          <p>{node.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </StyledPostLink>
                )
              })}
            </div>
          ))}
          {!this.state.showingMore && postList.length > 4 && (
            <StyledLoadButton
              data-testid="load-more"
              onClick={() => {
                this.setState({
                  postsToShow: this.state.postsToShow + 4,
                  showingMore: true,
                })
              }}
            >
              LOAD MORE
            </StyledLoadButton>
          )}
        </div>
      </Layout>
    )
  }
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
