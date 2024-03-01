import CadastroForm from '@/app/components/CadastroForm'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
    <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar />
        <CadastroForm />
        <Footer />
    </main>
  )
}

export default page