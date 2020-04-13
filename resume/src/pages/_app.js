import React from 'react'
import NotificationContainer from '../components/NotificationContainer'
import { NotificationProvider } from '../helpers/NotificationContext'
import '../global.css'
import '../index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
      <NotificationContainer />
    </NotificationProvider>
  )
}
