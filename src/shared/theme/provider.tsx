'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme} cssVarsRoot="body">{children}</ChakraProvider>
}