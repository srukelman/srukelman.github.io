import './App.css'
import { ChakraProvider, HStack } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

function App() {

  return (
    <ChakraProvider value={theme}>
      <ThemeProvider theme='dark' children={<HStack></HStack>}>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App
