import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
            <div className='md:flex-1 flex justify-center'>
                <Image 
                    src={"/images/logodubsol.png"}
                    alt='/'
                    width={350}
                    height={350}
                />
            </div>
            <div className="md:flex-1 flex flex-col gap-3 justify-center mb-5">
                <h1 className='text-3xl text-[#17a2b8] font-sans font-bold text-center'>Links:</h1>
                <ul className='text-lg font-sans font-semibold flex flex-col text-center'>
                    <li>Website</li>
                    <li>System</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='md:flex-1 flex flex-col gap-3 justify-center mb-5'>
                <h1 className='text-[#17a2b8] text-3xl font-sans font-bold text-center gap-4'>Trusted Partners:</h1>
                <div className='flex flex-row justify-center gap-5'>
                    <Image 
                        src={"/images/ega1.jpg"}
                        alt='/'
                        width={120}
                        height={120}
                    />
                    <Image 
                        src={"/images/vitrina.jpg"}
                        alt='/'
                        width={120}
                        height={120}
                    />
                </div>
            </div>
            <div className="md:flex-2 md:ml-10 gap-2">
                <div>
                    <h1 className='text-3xl font-sans font-bold text-[#17a2b8]'>Contact us</h1>
                </div>
                <form action="submit" className='flex flex-col gap-2'>
                    <input type="text" placeholder='Your Name:' className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md p-2' />
                    <input type="email" placeholder='Your best email:' className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md p-2' />
                    <textarea name="text" id="message" cols="20" rows="5" className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md p-2 resize-none' placeholder='Send us a message' />
                    <button className='text-white font-semibold bg-[#17a2b8] sm:w-72 w-full p-2 mt-2 rounded-md'>Send</button>
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer
