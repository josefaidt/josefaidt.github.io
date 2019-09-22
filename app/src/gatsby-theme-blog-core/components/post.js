import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({ location, data }) => {
  const { blogPost, previous, next } = data

  return (
    <div>
      <MDXRenderer>{blogPost.body}</MDXRenderer>
    </div>
  )
}

export default Post
