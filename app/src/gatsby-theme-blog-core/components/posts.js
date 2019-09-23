import React from 'react'
import { Skeleton, BlogCard, Quote } from '@josef/theme'

const Posts = ({ location, data }) => {
  const { site, allBlogPost } = data
  return (
    <Skeleton>
      <h1>Snakes and Sparklers</h1>
      <p>
        Compilation of my thoughts and opinions on all things tech, my experiences in the industry,
        web development, and oxford commas.
      </p>
      <Quote style={{ margin: '0 auto 1rem auto' }}>
        &quot;Snakes and Sparklers are the only ones I like.&quot; -Kicking Wing, Joe Dirt (2001)
      </Quote>
      <div>
        {allBlogPost.edges.map(({ node: post }, i) => (
          <BlogCard key={i} post={post} />
        ))}
      </div>
    </Skeleton>
  )
}

export default Posts
