import { FC, PropsWithChildren } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider resetCSS theme={theme}>
    {children}
  </ChakraProvider>
)
