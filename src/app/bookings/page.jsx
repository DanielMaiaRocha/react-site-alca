import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import Footer from '../components/Footer'
import BookingPage from '../components/BookingPage'

const page = () => {
  return (
    <LayoutAdmin> 
      <main className='min-h-screen flex justify-center pt-6'>
        <link rel="icon" href="/images/logo.png" sizes="any" />    
          <AuthNavbar />
          <BookingPage />
        </main>
        <Footer />
      
      </LayoutAdmin>
  )
}

export default page