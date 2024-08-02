import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ChatPage = () => {
  return (
    <div id='chat' className='mt-20 flex justify-center'>
        <div id="container" className='w-[1200px] m-12'>
            <span id='breadcrums' className='flex flex-row gap-1 font-semibold text-md text-[#555]'>
                <Link href={'/messages'} className=''>Messages</Link>
                <span>{'>'} Daniel</span>
            </span>
            <div id="messages" className='my-8 mx-0 p-12 flex flex-col gap-12 h-[500px] overflow-scroll'>
                <div id="item" className='flex gap-5 max-w-[600px] font-semibold'>
                    <Image src={"/images/profile-bg.png"} alt='/' width={50} height={80} className='rounded-full w-14 h-14 object-cover'/>
                    <p className='p-5 bg-[#e7e3e3] rounded-ss-none rounded-lg text-[#555]'>ola</p>
                </div>
                <div id="item owner" className='flex flex-row-reverse self-end gap-5 max-w-[600px] font-semibold'>
                    <Image src={"/images/teste.jpeg"} alt='/' width={50} height={80} className='rounded-full w-14 h-14 object-cover'/>
                    <p className='p-5 bg-[#17a2b8] text-white rounded-se-none rounded-lg '>ola teste 2</p>
                </div>
                <div id="item" className='flex gap-5 max-w-[600px] font-semibold'>
                    <Image src={"/images/profile-bg.png"} alt='/' width={50} height={80} className='rounded-full w-14 h-14 object-cover'/>
                    <p className='p-5 bg-[#e7e3e3] rounded-ss-none rounded-lg text-[#555]'>teste 3</p>
                </div>
                <div id="item owner" className='flex flex-row-reverse self-end gap-5 max-w-[600px] font-semibold'>
                    <Image src={"/images/teste.jpeg"} alt='/' width={50} height={80} className='rounded-full w-14 h-14 object-cover'/>
                    <p className='p-5 bg-[#17a2b8] text-white rounded-se-none rounded-lg '>teste 4</p>
                </div>
               
            </div>
            <hr className='h-0 border-[0.5px] border-solid mb-5'/>
            <div id="textsec" className='flex flex-row justify-center items-center gap-10'>
                <textarea name="" placeholder='write a message' id="" cols={30} rows={10} className='w-[80%] h-28 p-3 border border-[lightgray] rounded-lg resize-none' ></textarea>
                <button className='w-36 p-2 rounded-lg text-white font-semibold bg-[#17a2b8]'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default ChatPage