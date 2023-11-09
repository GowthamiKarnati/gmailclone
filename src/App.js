import React from 'react'
import Signin from './components/Signin'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import EmailContent from './components/EmailContent'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path="/email/:id" element={<EmailContent />} />
      </Routes>
    </div>
  )
}

export default App
