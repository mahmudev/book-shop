import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
