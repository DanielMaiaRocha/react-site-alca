import React from 'react'
import Navbar from '../components/Navbar'
import LoginForm from './LoginForm'

const page = () => {
  return (
    <main>
    <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar/>
        <LoginForm />
    </main>
  )
}

export default page