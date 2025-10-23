import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jobs from './pages/jobs'
import Talents from './pages/talents'
import TalentProfile from './pages/talentProfile'
import JobsDetails from './pages/jobsDetails'

import ApplyJob from './pages/apply'
import PostJob from './pages/postJob'
import RecruiterProfile from './pages/recruiterProfile'
import Companies from './pages/companies'
import RegisterForm from './pages/register'


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
      <Route path='/profile' element={<RecruiterProfile/>}  />
      <Route path='/companies' element={<Companies/>}  />
      <Route path='/register' element={<RegisterForm/>}  />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
