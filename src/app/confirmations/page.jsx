import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import Footer from '../components/Footer'
import BookingConfirm from '../components/BookingConfirm'


const page = () => {
  return (
    <>
      <main className='min-h-screen flex justify-center pt-6'>
        <link rel="icon" href="/images/logo.png" sizes="any" />    
          <AuthNavbar />
          <BookingConfirm />
        </main>
        <Footer />
    </>  
      
  )
}

export default page