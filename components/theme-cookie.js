import { ChakraProvider, createCookieStorageManager } from '@chakra-ui/react'
import theme from '../lib/theme'

export default function Chakra({ children }) {
  const colorModeManager = createCookieStorageManager('{storageKey}')

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}
