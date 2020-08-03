import path from 'path'
import React from 'react'
import Link from 'next/link'
import recursiveReadDir from '../../support/recursiveReadDir'

export default function BlogHomePage({ posts, ...rest }) {
  return (
    <main>
      <section>
        <header>Snakes and Sparklers</header>
        <div>
          <p>wow look at all the blog posts</p>
          {posts.map((post, index) => (
            <div key={index}>
              <Link href={post}>
                <a>post {index}</a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export async function getStaticProps(context) {
  const paths = await recursiveReadDir(path.join(process.env.PWD, `content/posts/`))
  const slugs = paths.map(path => `/blog/${path.replace(/\/index$/, '')}`)
  console.log('PATHS ARE', paths)
  return {
    props: {
      posts: slugs,
    },
  }
}
