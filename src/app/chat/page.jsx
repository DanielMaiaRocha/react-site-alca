import React from 'react'

import AuthNavbar from '../components/AuthNavBar'

const page = () => {
  return (
    <main className='min-h-screen flex justify-center pt-6'>
      <link rel="icon" href="/images/logo.png" sizes="any" />
      <AuthNavbar/>
    </main>
  )
}

export default page