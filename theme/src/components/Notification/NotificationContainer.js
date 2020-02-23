import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import { motion } from 'framer-motion'
// import { useCurrentTheme } from '../../helpers/ThemeContext'
import { useNotifications } from '../../helpers/NotificationContext'
import NotificationToast from './NotificationToast'

const StyledNotificationContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding-right: 0.8rem;
  @media screen and (max-width: 768px) {
    margin-left: 0.8rem;
  }
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.6rem;
`

const NotificationContainer = ({ children, notifications }) => {
  const [notificationState, notificationDispatch] = useNotifications()
  // const theme = useCurrentTheme()
  const theme = React.useContext(ThemeContext)
  const onClose = notificationId => {
    return notificationDispatch({ type: 'toast_shown', payload: { id: notificationId } })
  }
  // React.useEffect(() => {
  //   console.log('MOUNTING NOTIFICATION CONTAINER')
  //   if (window.navigator.serviceWorker) {
  //     console.log('THERES A SERVICE WORKER FOUND')
  //     const notificationData = {
  //       type: 'info',
  //       content: {
  //         title: 'Update Found',
  //         description: 'This application has been updated. Reload to display the latest version?',
  //         buttonText: 'Reload',
  //         buttonFn: () => window.location.reload(true),
  //       },
  //     }
  //     window.navigator.serviceWorker.ready.then(reg => {
  //       console.log('SW ACTIVE', reg)
  //       reg.addEventListener('updatefound', () => {
  //         notificationDispatch({ type: 'create', payload: notificationData })
  //       })
  //     })
  //   }
  //   // return () => {
  //   //   window.navigator.serviceWorker.removeEventListener('updatefound')
  //   // }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  return (
    <StyledNotificationContainer>
      {children}
      {notificationState.length > 0 &&
        notificationState.map((n, i) => {
          return (
            <motion.div
              animate={{ y: -5, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1 }}
              className="gtw--notification-toast__container"
              key={n.id}
            >
              {!n.__internal.toast_shown ? <NotificationToast data={n} onClose={onClose} /> : null}
            </motion.div>
          )
        })}
    </StyledNotificationContainer>
  )
}

NotificationContainer.defaultProps = {
  notifications: [],
}

export default NotificationContainer
