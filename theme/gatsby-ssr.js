import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/components/theme'
import { GlobalStyle } from './src/components/styles/global.css'
import { NotificationProvider, useNotificationDispatch } from './src/helpers/NotificationContext'
import { NotificationContainer } from './src/components/Notification'

// export const onServiceWorkerUpdateReady = () => {
//   const dispatchNotification = useNotificationDispatch()
//   // const answer = window.confirm(
//   //   `This application has been updated. Reload to display the latest version?`
//   // )
//   dispatchNotification({ type: 'create', payload: {} })

//   // if (answer === true) {
//   //   window.location.reload()
//   // }
// }

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    <NotificationProvider>{element}</NotificationProvider>
  </ThemeProvider>
)

// export const wrapPageElement = ({ element }) => (
//   <NotificationContainer>{element}</NotificationContainer>
// )
