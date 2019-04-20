import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import components from '../components/markdown'
import Layout from '../components/layout'
import { GlobalStyle } from '../components/global.css'

const MdxPageTemplate = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <h1>MDX PAGE TEMPLATE</h1>
        <h2 style={{ color: 'red' }}>{pageContext.meta.title}</h2>
        <MDXProvider components={components}>
          <MDXRenderer>{pageContext.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </div>
  )
}

export default MdxPageTemplate
