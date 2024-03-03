import React from 'react'
import LayoutAdmin from '../components/LayoutAdmin'

function page() {
  return (
    <LayoutAdmin> 
    <main className='min-h-screen flex justify-center pt-6'>
            <h1>Home page</h1>
        <button>
            Sair
        </button>
    </main>
    </LayoutAdmin>
  )
}

export default page