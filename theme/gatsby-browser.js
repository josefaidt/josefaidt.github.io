import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/components/theme'
import { GlobalStyle } from './src/components/styles/global.css'
import { NotificationProvider } from './src/helpers/NotificationContext'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    {element}
  </ThemeProvider>
)
