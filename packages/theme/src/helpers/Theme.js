import React from 'react'
import theme from '../theme'

const ThemeContext = React.createContext({ ...theme })

const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)

const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
