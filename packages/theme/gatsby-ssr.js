import React from 'react'
import { ThemeProvider } from './src/helpers/Theme'
export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>
