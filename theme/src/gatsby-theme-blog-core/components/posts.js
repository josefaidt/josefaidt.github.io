import React from 'react'
import BlogCard from '../../components/Cards'
import Skeleton from '../../components/Skeleton'
import Quote from '../../components/styles/Quote'
import BlogText from '../../components/BlogText'

const Posts = ({ location, data }) => {
  const { site, allBlogPost } = data
  return (
    <Skeleton>
      <BlogText />
      <div>
        {allBlogPost.edges.map(({ node: post }, i) => {
          return <BlogCard key={i} post={post} />
        })}
      </div>
    </Skeleton>
  )
}

export default Posts
