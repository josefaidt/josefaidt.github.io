/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Quote from '../components/styles/Quote'

const components = {
  img: props => <img style={{ borderRadius: '3rem' }} {...props} />,
  Link,
  blockquote: Quote,
}

const MdxProvider = props => <MDXProvider components={components}>{props.children}</MDXProvider>

export default MdxProvider
