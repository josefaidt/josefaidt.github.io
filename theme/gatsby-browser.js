import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/components/theme'
import { GlobalStyle } from './src/components/styles/global.css'
import { NotificationProvider } from './src/helpers/NotificationContext'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    <NotificationProvider>{element}</NotificationProvider>
  </ThemeProvider>
)

// export const wrapPageElement = ({ element }) => (
//   <NotificationContainer>{element}</NotificationContainer>
// )
