import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
// import components from '../components/markdown'
import Layout from '../components/Skeleton'
import { GlobalStyle } from '../components/style.css'

const MdxPageTemplate = ({ pageContext, children }) => {
  console.log(pageContext)
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <h1>MDX PAGE TEMPLATE</h1>
        <h2 style={{ color: 'red' }}>{pageContext.meta.title}</h2>
        <MDXProvider>{children}</MDXProvider>
      </Layout>
    </div>
  )
}

export default MdxPageTemplate
