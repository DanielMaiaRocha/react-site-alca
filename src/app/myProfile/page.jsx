import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import ProfileFuncs from '../components/ProfileFuncs'
import ProfileHero from '../components/ProfileHero'
import Footer from '../components/Footer'

function page() {
  return (

    <LayoutAdmin>
      <main className='min-h-screen  pt-6'>
      <link rel="icon" href="/images/logo.png" sizes="any" />
          <AuthNavbar />
          <ProfileFuncs />
          <ProfileHero />  
      </main> 
      <Footer />
      
    </LayoutAdmin>
  )
}

export default page