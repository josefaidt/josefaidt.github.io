import React from 'react'
import BlogPost from '../../templates/blogpost'

const Post = ({ location, data }) => {
  const { blogPost, previous, next } = data
  return <BlogPost data={data}></BlogPost>
}

export default Post
