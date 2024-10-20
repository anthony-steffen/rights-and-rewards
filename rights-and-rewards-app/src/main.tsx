import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import Login from './pages/login/Login.tsx'
import Register from './pages/register/Register.tsx'
import './index.css'
import Dashboard from './pages/dashboard/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="/rights-and-rewards-app">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Dashboard/>} />
      </Routes>
    </Router>
  </StrictMode>
)
