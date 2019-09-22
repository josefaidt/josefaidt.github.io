import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

// eslint-disable-next-line jsx-a11y/heading-has-content
const H1 = props => <h1 style={{ color: 'tomato' }} {...props} />

const components = {
  h1: H1,
}

const PageTemplate = props => {
  return (
    <div>
      <MDXProvider components={components}>{props.children}</MDXProvider>
    </div>
  )
}

export default PageTemplate
