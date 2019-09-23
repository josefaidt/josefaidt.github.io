import React from 'react'
import styled from 'styled-components'
import Skeleton from '../components/Skeleton'
import MdxProvider from '../components/MDXProvider'

const PageTemplate = props => {
  return (
    <Skeleton>
      <MdxProvider>{props.children}</MdxProvider>
    </Skeleton>
  )
}

export default PageTemplate
