import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jobs from './pages/jobs'
import Talents from './pages/talents'


function App() {
  

  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Home/>}  />
      <Route path='/jobs' element={<Jobs/>}  />
      <Route path='/talents' element={<Talents/>}  />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
