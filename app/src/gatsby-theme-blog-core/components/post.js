import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { BlogPost } from '@josef/gatsby-theme'

const Post = ({ location, data }) => {
  const { blogPost, previous, next } = data
  console.log('BLOG DATA', data)
  return <BlogPost data={data}></BlogPost>
}

export default Post
