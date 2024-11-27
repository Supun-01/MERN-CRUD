import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {
  return (
    <div className='table-holder flex justify-center items-center bg-cyan-50'>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/update' element={<UpdateUser />} />
      </Routes>
    </div>
  )
}

export default App
