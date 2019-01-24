import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql as gql, Link } from 'gatsby'
import styled from 'styled-components'
import SEO from 'components/seo'
import Layout from 'components/Skeleton'
import { theme } from 'components/Meta'
import Quote from 'components/styles/Quote'

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
      /* color: white; */
      /* filter: brightness(150%); */
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p,
    span#date {
      font-size: 0.8rem;
      /* filter: brightness(150%); */
    }
    span.tag {
      /* filter: brightness(120%); */
      color: white;
      /* background-color: #6a646b; */
      background-color: #8b868c;
      transition: background-color 0.2s linear;
    }
    #date {
      font-style: italic;
    }
  }
  .container:hover {
    h1,
    span#date,
    p {
      color: ${theme.almostblack};
      /* color: red; */
      /* filter: brightness(80%); */
    }
    span.tag {
      background-color: ${theme.almostblack};
      transition: background-color 0.2s linear;
      color: white;
    }
  }

  @media only screen and (max-width: 760px) {
    margin: 1rem 0.3rem;
  }
`

const StyledTag = styled.span`
  background-color: ${theme.almostblack};
  color: white;
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  min-width: 80px;
  text-align: center;
  margin: 0 0.3rem 0.3rem 0;
  font-size: 0.7rem;
  color: white;
  &:hover {
    /* background-color: red; */
  }
`

const StyledTagList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  div {
    display: flex;
    flex-wrap: wrap;
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

const chunk = (array, size) => {
  const chunkedArr = []
  let index = 0
  while (index < array.length) {
    chunkedArr.push(array.slice(index, size + index))
    index += size
  }
  return chunkedArr
}

if (typeof window !== `undefined`) {
  window.postsToShow = 12
}

class Blog extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.object
    })
  }

  constructor() {
    super()
    let postsToShow = 12
    if (typeof window !== `undefined`) {
      postsToShow = window.postsToShow
    }
    this.state = {
      showingMore: postsToShow > 12,
      postsToShow
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight - (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ postsToShow: this.state.postsToShow + 12 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.postsToShow = this.state.postsToShow
  }

  render() {
    const postList = this.props.data.allMarkdownRemark.edges
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
          Compilation of my thoughts and opinions on all things tech, my experiences in the
          industry, web development, and oxford commas.
        </p>
        <Quote style={{ margin: '0 auto 1rem auto' }}>
          "Snakes and Sparklers are the only ones I like." -Kicking Wing, Joe Dirt (2001)
        </Quote>
        {/* <StyledTagList>{renderTags(allTags)}</StyledTagList> */}
        {chunk(posts.slice(0, this.state.postsToShow), 3).map((chunk, i) => (
          <div
            key={`chunk-${i}`}
            css={{
              display: `flex`,
              alignItems: `stretch`,
              flexShrink: 0,
              flexDirection: `row`,
              marginBottom: rhythm(1 / 8),
              [presets.Tablet]: {
                marginBottom: rhythm(1)
              }
            }}>
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
          </div>
        ))}
        {!this.state.showingMore && (
          <a
            css={{
              ...scale(-0.5),
              border: `1px solid blue`,
              boxShadow: 0,
              background: `none`,
              color: `blue`,
              cursor: `pointer`,
              margin: `0 auto`,
              padding: rhythm(1 / 2),
              width: `calc(100vw - ${rhythm(1)})`,
              marginLeft: rhythm(0.5),
              marginRight: rhythm(0.5),
              marginBottom: rhythm(0.5),
              marginTop: rhythm(0.5),
              [presets.Tablet]: {
                borderRadius: `100%`,
                margin: `0 auto`,
                marginBottom: rhythm(1.5),
                marginTop: rhythm(1.5),
                padding: rhythm(1),
                height: rhythm(5),
                width: rhythm(5),
                lineHeight: rhythm(3),
                textAlign: `center`
              }
            }}
            data-testid="load-more"
            onClick={() => {
              this.setState({
                postsToShow: this.state.postsToShow + 12,
                showingMore: true
              })
            }}>
            Load More
          </a>
        )}
        {/* </div> */}
      </Layout>
    )
  }
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

export default Blog
