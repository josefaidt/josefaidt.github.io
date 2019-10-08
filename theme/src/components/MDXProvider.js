/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/display-name */
import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Quote from './styles/Quote'
import Line from './Markdown/break'
import Link from './Markdown/link'
import { Code, InlineCode, CodeBlock } from './Markdown/code'
import Icon from './Icon'
import { Title } from './styles/Titles.css'

const shortcodes = {
  Quote,
  Icon,
  Title,
}

const components = {
  a: props => <Link {...props} />,
  pre: props => <div {...props} />,
  code: CodeBlock,
  inlineCode: InlineCode,
  blockquote: Quote,
  hr: Line,
  ...shortcodes,
}

const MdxProvider = props => <MDXProvider components={components}>{props.children}</MDXProvider>

export default MdxProvider
