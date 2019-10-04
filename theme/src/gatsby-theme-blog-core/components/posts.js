import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlogCard from '../../components/Cards'
import Skeleton from '../../components/Skeleton'
import Quote from '../../components/styles/Quote'
import BlogText from '../../components/BlogText'

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
  console.log(keywords)
  return (
    <Skeleton>
      <BlogText />
      <div>
        {allBlogPost.edges.map(({ node: post }, i) => {
          post.keywords = keywords.allBlogPost.edges[i].node.keywords
          return <BlogCard key={i} post={post} />
        })}
      </div>
    </Skeleton>
  )
}

export default Posts
