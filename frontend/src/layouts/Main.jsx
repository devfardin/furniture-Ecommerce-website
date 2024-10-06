import React from 'react'
import Header from '../components/HeaderFooter/Header'
import Footer from '../components/HeaderFooter/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <div className=''>
        <Header/>
        </div>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Main