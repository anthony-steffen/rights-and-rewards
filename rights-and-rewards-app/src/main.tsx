import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Import the extendTheme function
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/utils/theme.ts";


  
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import App from './App.tsx'
  import Login from './pages/login/Login.tsx'
  import Register from './pages/register/Register.tsx'
  import Dashboard from './pages/dashboard/Dashboard.tsx';



  // // 3. Pass the `theme` prop to the `ChakraProvider`
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Router basename="/rights-and-rewards-app">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Dashboard/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
)
