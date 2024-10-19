import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';


export const backendUrl = 'http://localhost:8000';

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex w-full'>
      <Sidebar />
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add />} />
            <Route />
            <Route />
          </Routes>
      </div>
      </div>
      Admin
    </div>
  )
}

export default App
