import { graphql } from 'gatsby'
import PostsPage from '../components/posts'

export default PostsPage

export const query = graphql`
  query MODIFIED_POSTS_QUERY {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
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
