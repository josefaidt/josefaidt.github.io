import React from 'react'

const Posts = ({ location, data }) => {
  const { site, allBlogPost } = data
  return (
    <div>
      <h1>Snakes and Sparklers</h1>
      {allBlogPost.edges.map(({ node: post }, i) => (
        <div key={i}>{post.excerpt}</div>
      ))}
    </div>
  )
}

export default Posts
