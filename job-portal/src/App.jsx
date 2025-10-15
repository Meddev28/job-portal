import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jobs from './pages/jobs'
import Talents from './pages/talents'
import TalentProfile from './pages/talentProfile'
import JobsDetails from './pages/jobsDetails'

import ApplyJob from './pages/apply'
import PostJob from './pages/postJob'


function App() {
  

  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Home/>}  />
      <Route path='/jobs' element={<Jobs/>}  />
      <Route path='/talents' element={<Talents/>}  />
      <Route path='/talent-profile' element={<TalentProfile/>}  />
      <Route path='/job-details' element={<JobsDetails/>}  />
      <Route path='/apply-job' element={<ApplyJob/>}  />
      <Route path='/post-job' element={<PostJob/>}  />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
