import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'

function page() {
  return (

    <LayoutAdmin>
      <main className='min-h-screen flex justify-center pt-6'>
      <link rel="icon" href="/images/logo.png" sizes="any" />
          <AuthNavbar />
      </main>
    </LayoutAdmin>
  )
}

export default page