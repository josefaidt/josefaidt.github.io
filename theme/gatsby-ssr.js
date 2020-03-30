import React from 'react'
import { ThemeProvider } from './src/helpers/ThemeContext'

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>
