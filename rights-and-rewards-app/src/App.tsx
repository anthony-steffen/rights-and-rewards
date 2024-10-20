import './App.css'
import { Text, Box, ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Box 
      width={["100%", "50%", "25%"]} p={[2, 4, 6]}
      color='red.50'
      background={['red.100', 'green.100', 'blue.500']}
      style={{border: '1px solid black'}}
      >
        <Text fontSize="xl">Hello, World</Text>
      </Box>
    </ChakraProvider>
    // <div style={{backgroundColor: 'lightblue', padding: '20px'}}>
    //   App
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
