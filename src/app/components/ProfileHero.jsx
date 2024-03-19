import { Form, Formik } from 'formik'
import Image from 'next/image'
import React from 'react'

const ProfileHero = () => {
  return (
    <main className='flex mx-auto justify-center items-center -mt-[19.5rem] border solid rounded border-zinc-500 w-[50%] '>
        <form className='flex flex-col-2 -ml-80'>
            <Image 
              src={"/images/flavia.jpg"}
              alt='/'
              width={1500}
              height={1500}
              className='flex m-2 rounded-full w-52 h-52 object-cover'
            />
            <div className='flex flex-col w-96 h-10 p-1 mx-auto mt-10 gap-1'>
              <span className='text-md font-customFont4 font-semibold'>Your Name:</span>
              <input type="text" placeholder='Edit your Name:' className='rounded border border-zinc-600' />

              <span className='text-md font-customFont4 font-semibold'>Your profession:</span>
              <select className='rounded border w-52 border-zinc-600'>
                <option value="/">Chose your profession:</option>
                <option value="/">Dubbing Actor</option>
                <option value="/">Project Manager</option>
                <option value="/">Reviewer</option>
                <option value="/">Director</option>
              </select>
            </div>
        </form>
    </main>
  )
}

export default ProfileHero