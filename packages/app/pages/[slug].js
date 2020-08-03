import { promises as fs } from 'fs'
import path from 'path'
import React from 'react'
import MDX from '@mdx-js/runtime'
import Link from 'next/link'
import fm from 'front-matter'
import recursiveReadDir from '../support/recursiveReadDir'

export default function PageTemplate({ page, ...rest }) {
  return (
    <main>
      <section>
        <header>{page.meta.title}</header>
        <div>
          <MDX>{page.body}</MDX>
        </div>
      </section>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = await recursiveReadDir(path.join(process.env.PWD, 'content/pages/'))
  return {
    paths: paths.map(p => `/${p}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const page = await fs.readFile(path.join(process.env.PWD, `content/pages/${slug}.mdx`), 'utf8')
  const content = fm(page)
  return {
    props: {
      slug,
      page: {
        meta: {
          ...content.attributes,
        },
        body: content.body,
      },
    },
  }
}
