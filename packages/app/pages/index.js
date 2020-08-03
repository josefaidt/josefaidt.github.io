import path from 'path'
import { promises as fs } from 'fs'
import React from 'react'
import MDX from '@mdx-js/runtime'
import fm from 'front-matter'
import Link from 'next/link'

export default function HomePage({ page, ...rest }) {
  return (
    <main>
      <MDX>{page.body}</MDX>
    </main>
  )
}

export async function getStaticProps(context) {
  const page = await fs.readFile(path.join(process.env.PWD, `content/pages/index.mdx`), 'utf8')
  const slug = '/'
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
