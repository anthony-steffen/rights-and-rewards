import {Text, Flex } from '@chakra-ui/react'


function App() {
const theme = {
  responsiveText:{
    base: '15px',
    md: '30px',
    lg: '46px',
    xl: '40px'
  },
  breakpoints: {
    sm: '100%',
    md: '100%',
    lg: '100%',
    xl: '100%'
  },
  responsivePadding: {
    base: '6',
    md: '16',
    lg: '30',
    xl: '80'
  }
}

  return (
    <Flex
    m={'auto'}
    h={'100vh'}
    bg='blackAlpha.900'
    maxW={theme.breakpoints}
    color='white'
    border={'1px solid'} 
    borderColor={'red.400'}
    p={theme.responsivePadding}
    justifyContent={'center'}
    alignItems={'center'}
    flexDir={'column'}
    >
     
      <Text fontSize={theme.responsiveText} textAlign={'center'}>
      Welcome to Rights and Rewards, the best way to manage tasks 
      of their children and even rewards them for fulfilling their duties.
      </Text>
   
    </Flex>
  )
}

export default App
