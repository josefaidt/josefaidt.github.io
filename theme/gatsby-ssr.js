import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/components/theme'
import { GlobalStyle } from './src/components/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    {element}
  </ThemeProvider>
)
