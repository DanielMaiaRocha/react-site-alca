import React from 'react'
import Navbar from '../components/Navbar'
import CadastroForm from './CadastroForm'


const page = () => {
  return (
    <main>
    <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar/>
        <CadastroForm />
    </main>
  )
}

export default page