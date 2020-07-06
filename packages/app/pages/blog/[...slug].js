import { promises as fs } from 'fs'
import path from 'path'
import React from 'react'
import MDX from '@mdx-js/runtime'
import fm from 'front-matter'
import recursiveReadDir from '../../support/recursiveReadDir'

export default function BlogPostTemplate({ post, ...rest }) {
  return (
    <main>
      <section>
        <header>{post.meta.title}</header>
        <MDX>{post.body}</MDX>
      </section>
    </main>
  )
}

export async function getStaticPaths(context) {
  const paths = await recursiveReadDir(path.join(process.env.PWD, `content/posts/`))
  return {
    paths: paths.map(path => `/blog/${path}`),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug.join('/')
  const post = await fs.readFile(
    path.join(process.env.PWD, `content/posts/${slug}/index.mdx`),
    'utf8'
  )
  const content = fm(post)
  // console.log('POST IS', content)
  return {
    props: {
      post: {
        meta: {
          ...content.attributes,
          date: content.attributes?.date && new Date(content.attributes.date).toString(),
        },
        body: content.body,
      },
    },
  }
}
