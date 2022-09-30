import { createTheme, ThemeProvider } from '@mui/material'
import { ReactNode , } from 'react'
import { lightTheme } from '../../themes'

interface PageProviderProps {
    children: ReactNode
}

const darkTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  

export const PageProvider = ({ children}: PageProviderProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
        { children }
        </ThemeProvider>
  )
}
