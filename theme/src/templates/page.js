import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Skeleton from '../components/Skeleton'
import Quote from '../components/styles/Quote'

const components = {
  Link,
  blockquote: Quote,
}

const PageTemplate = props => {
  return (
    <Skeleton>
      <MDXProvider components={components}>{props.children}</MDXProvider>
    </Skeleton>
  )
}

export default PageTemplate
