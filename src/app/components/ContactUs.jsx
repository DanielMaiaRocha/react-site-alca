import React from 'react'

const ContactUs = () => {
  return (
    <div className="md:flex-2 md:ml-10 gap-2">
                <div>
                    <h1 className='text-3xl font-sans font-bold text-[#17a2b8] '>Contact us:</h1>
                </div>
                <form action="submit" className='flex flex-col gap-2'>
                    <input type="text" placeholder='Your Name:' className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md p-2' />
                    <input type="email" placeholder='Your best email:' className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md p-2' />
                    <textarea name="text" id="message" cols="20" rows="5" className='text-black sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-md p-2 resize-none' placeholder='Send us a message' />
                    <button className='text-white font-semibold bg-[#17a2b8] sm:w-72 w-full p-2 mt-2 rounded-md'>Send</button>
                </form>
            </div>
  )
}

export default ContactUs