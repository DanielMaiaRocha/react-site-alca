import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import ProfileFuncs from '../components/ProfileFuncs'
import ProfileHero from '../components/ProfileHero'

function page() {
  return (

    <LayoutAdmin>
      <main className='min-h-screen  pt-6'>
      <link rel="icon" href="/images/logo.png" sizes="any" />
          <AuthNavbar />
          <ProfileFuncs />
          <ProfileHero />  
      </main> 
      
    </LayoutAdmin>
  )
}

export default page