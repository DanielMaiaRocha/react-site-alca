import React from 'react'
import AuthNavbar from '../components/AuthNavBar'
import LayoutAdmin from '../components/LayoutAdmin'
import CardPage from '../components/CardPage'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <LayoutAdmin>
    <link rel="icon" href="/images/logo.png" sizes="any" />    
        <AuthNavbar/>
        <CardPage />
        <Footer />
    </LayoutAdmin>
    </>
  )
}

export default page