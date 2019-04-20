import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  color: purple;
`

const Paragraph = props => <P {...props} />

export { Paragraph }
