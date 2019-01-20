import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Skeleton'
import SEO from '../../components/seo'

// export default class BlogTemplate extends Component {
//   render() {
//     return (
//       <Layout>
//         <SEO
//           keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
//           title="About"
//         />
//         <h1>Blog Post</h1>
//       </Layout>
//     )
//   }
// }

const BlogPost = (props) => {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `application`, `react`, `josef aidt`, `josef`, `aidt`]}
        title="Blog"
      />
      <div>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </Layout>
  )
}

export default BlogPost;
export const query = graphql`
query PostQuery($slug: String!) {
   markdownRemark(fields: { slug: { eq: $slug } }) {
     html
     frontmatter {
      title
      description
     }
 }
}`
