import React from 'react'
import BlogCard from '../../components/Cards'
import Skeleton from '../../components/Skeleton'
import Quote from '../../components/styles/Quote'

const Posts = ({ location, data }) => {
  const { site, allBlogPost } = data
  console.log('POSTS DATA', data)
  console.log(allBlogPost)
  return (
    <Skeleton>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Snakes and Sparklers</h1>
      <p>
        Compilation of my thoughts and opinions on all things tech, my experiences in the industry,
        web development, and oxford commas.
      </p>
      <Quote style={{ margin: '0 auto 1rem auto' }}>
        &quot;Snakes and Sparklers are the only ones I like.&quot; -Kicking Wing, Joe Dirt (2001)
      </Quote>
      <div>
        {allBlogPost.edges.map(({ node: post }, i) => {
          console.log('POSTS NODE', post)
          return <BlogCard key={i} post={post} />
        })}
      </div>
    </Skeleton>
  )
}

export default Posts
