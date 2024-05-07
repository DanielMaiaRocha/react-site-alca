import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'
import AuthNavbar from '../components/AuthNavBar'
import HeroMainPage from '../components/HeroMainPage'
import FilterSection from '../components/FilterSection'
import Footer from '../components/Footer'
import Card from '../components/Card'

function page() {
  return (
    <LayoutAdmin>
        <main className='min-h-screen flex justify-center pt-6'>
        <link rel="icon" href="/images/logo.png" sizes="any" />
            <AuthNavbar />
            <HeroMainPage />
        </main>
         <FilterSection />
         
         <Footer />
      </LayoutAdmin>
    
  )
}

export default page