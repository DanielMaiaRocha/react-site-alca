import Footer from '@/app/components/Footer'
import LayoutAdmin from '@/app/components/LayoutAdmin'
import LoginForm from '@/app/components/LoginForm'
import Navbar from '@/app/components/Navbar'
import React from 'react'



const page = () => {
  return (
 
    <main>
    <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar />
        <LoginForm />
        <Footer />
    </main> 
    
  )
}

export default page