import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import ProfileFuncsCard from '../components/ProfileFuncsCard'
import MyCard from '../components/MyCard'
import Footer from '../components/Footer'

function page() {
  return (

    <LayoutAdmin>
      <main className='min-h-screen  pt-6'>
      <link rel="icon" href="/images/logo.png" sizes="any" />
          <AuthNavbar />
          <ProfileFuncsCard />
          <MyCard />  
      </main> 
      <Footer />
      
    </LayoutAdmin>
  )
}

export default page