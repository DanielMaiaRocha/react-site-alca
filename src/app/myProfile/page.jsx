import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import ProfileFuncs from '../components/ProfileFuncs'

function page() {
  return (

    <LayoutAdmin>
      <main className='min-h-screen flex justify-center pt-6'>
      <link rel="icon" href="/images/logo.png" sizes="any" />
          <AuthNavbar />
          <ProfileFuncs />   
      </main> 
      
    </LayoutAdmin>
  )
}

export default page