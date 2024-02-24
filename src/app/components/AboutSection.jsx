import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <Image 
            src="/images/microfone.png"
            className='rounded-md my-4'
            alt='laptop'
            width={430}
            height={430}
          />
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl md:text-3xl font-customFont font-bold text-[#17a2b8] p-2'>How to start working with Dubber:</h1>
            <p className='text-xl md:text-lg font-semibold font-customFont text-[#454343] p-4 py-7'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae itaque accusamus voluptatem at reprehenderit expedita error. Distinctio libero minima eaque qui similique, autem provident magnam ipsam expedita officiis eveniet eum?
           </p>
           <button className='bg-[#17a2b8] w-56 rounded-md p-2 md:text-lg text-xl font-customFont font-semibold mx-auto my-5 hover:bg-[#468089]'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default AboutSection