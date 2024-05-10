import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import HeroMainPage from '../components/HeroMainPage'
import Footer from '../components/Footer'
import CardSection from '../components/CardSection'


function page() {
  return (
    <LayoutAdmin>
        <main className='min-h-screen flex justify-center pt-6'>
        <link rel="icon" href="/images/logo.png" sizes="any" />
            <AuthNavbar />
            <HeroMainPage />
        </main>
        <CardSection />
         <Footer />
      </LayoutAdmin>
    
  )
}

export default page