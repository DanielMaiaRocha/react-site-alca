import { Form, Formik } from 'formik'
import React from 'react'

const ProfileHero = () => {
  return (
    <main className='flex mx-auto justify-center items-center mt-20'>
        <div className='border solid rounded-md border-zinc-500'>
           <form>
                <input type="text" placeholder='Seu nome completo' />
           </form>
        </div>
    </main>
  )
}

export default ProfileHero