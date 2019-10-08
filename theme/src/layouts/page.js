import React from 'react'
import Skeleton from '../components/Skeleton'
import SEO from '../components/seo'
import MdxProvider from '../components/MDXProvider'

const PageTemplate = props => {
  return (
    <Skeleton>
      <SEO title={props.pageContext && props.pageContext.frontmatter.title} />
      <MdxProvider>{props.children}</MdxProvider>
    </Skeleton>
  )
}

export default PageTemplate
