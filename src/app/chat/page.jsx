import React from 'react'

import AuthNavbar from '../components/AuthNavBar'
import ChatPage from '../components/ChatPage'
import LayoutAdmin from '../components/LayoutAdmin'
import Footer from '../components/Footer'

const page = () => {
  return (
    <LayoutAdmin>
      <main className='min-h-screen flex justify-center '>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <AuthNavbar/>
        <ChatPage />
      </main>
      <Footer />
    </LayoutAdmin>

  )
}

export default page