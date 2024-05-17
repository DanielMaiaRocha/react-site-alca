import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import Footer from '../components/Footer'
import Messages from '../components/Messages'

const page = () => {
  return (
    <LayoutAdmin> 
      <main className='min-h-screen flex justify-center pt-6'>
        <link rel="icon" href="/images/logo.png" sizes="any" />    
          <AuthNavbar />
          <Messages />
        </main>
        <Footer />
      
      </LayoutAdmin>
  )
}

export default page