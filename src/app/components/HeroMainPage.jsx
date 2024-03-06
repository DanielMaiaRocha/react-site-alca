"use client"
import Image from 'next/image'
import React from 'react'

const HeroMainPage = () => {
  return (

    <main className='flex flex-col-2 gap-56'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl md:text-6xl font-bold font-customFont3 mx-auto p-7'>Dub<span className='text-[#17a2b8] font-customFont3'>ber</span></h1>
            <p className='text-xl md:text-2xl text-zinc-700 mx-auto p-4 py-7 w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quaerat quia impedit voluptates rerum velit earum optio temporibus expedita placeat.</p>
        </div>
        <div className='flex justify-center items-center mt-10'>
        <Image 
                src="/images/dublador.jpg" 
                alt='/'
                width={2500}
                height={2500}
                className='w-[500px] h-[650px] rounded object-cover'
        />
        </div>
    </main>
  )
}

export default HeroMainPage