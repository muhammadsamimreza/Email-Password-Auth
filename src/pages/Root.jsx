import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root