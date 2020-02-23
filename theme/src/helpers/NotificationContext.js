import React from 'react'

const NotificationStateContext = React.createContext()
const NotificationDispatchContext = React.createContext()

const NotificationReducer = (state, action) => {
  const internalData = {
    __internal: {
      toast_shown: false,
    },
  }
  const sampleContent = {
    title: "I'm a sample title",
    description:
      'The default values for notification content have been set. Dispatch using `content: { title: String!, description: String! }`',
  }
  switch (action.type) {
    case 'create': {
      const newNotification = {
        ...internalData,
        id: state.length ? state[state.length - 1].id + 1 : 0,
        creation: Date.now(),
        content: sampleContent,
        ...action.payload,
      }
      console.log(newNotification)
      return [...state, newNotification]
    }
    case 'toast_shown': {
      return [...state].map(n => {
        if (n.id === action.payload.id) {
          return { ...n, __internal: { ...n.__internal, toast_shown: true } }
        } else {
          return n
        }
      })
    }
    case 'clear':
      return []
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

// // FOR TESTING, REMOVE FOR PRODUCTION
// const initialState = [
//   {
//     __internal: {
//       toast_shown: false,
//     },
//     id: 0,
//     type: 'error',
//     content: {
//       title: 'Missing GeoLocation',
//       description:
//         'Something went wrong retrieving the geolocation from the browser. Please attempt to load again.',
//     },
//   },
//   {
//     __internal: {
//       toast_shown: false,
//     },
//     id: 1,
//     type: 'success',
//     content: {
//       title: 'GeoLocation Loaded',
//       description: 'GeoLocation loaded successfully',
//     },
//   },
// ]

const NotificationProvider = ({ children }) => {
  // TODO: useEffect to update context when localStorage is available
  // const cachedData = localStorage && JSON.parse(localStorage.getItem('Notification'))
  // const [state, dispatch] = React.useReducer(NotificationReducer, initialState)
  const [state, dispatch] = React.useReducer(NotificationReducer, [])
  return (
    <NotificationStateContext.Provider value={state}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationStateContext.Provider>
  )
}

const useNotificationState = () => {
  const context = React.useContext(NotificationStateContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

const useNotificationDispatch = () => {
  const context = React.useContext(NotificationDispatchContext)
  if (context === undefined) {
    throw new Error('useNotificationDispatch must be used within a NotificationProvider')
  }
  return context
}

const useNotifications = () => {
  const stateContext = React.useContext(NotificationStateContext)
  const dispatchContext = React.useContext(NotificationDispatchContext)
  if (dispatchContext === undefined && stateContext === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return [stateContext, dispatchContext]
}

export { NotificationProvider, useNotifications, useNotificationDispatch, useNotificationState }
