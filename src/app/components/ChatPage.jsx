"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([   
    { id: 1, text: 'Hi, hope we can scheadule as fast as posible, cant wait to start my production.', owner: true },
    { id: 2, text: 'Hello, for sure! We can start it in the next week.', owner: false },
    { id: 3, text: 'Okay, let me know when you avaliable to talk about your scheadule.', owner: true },

  
  ]);

  
  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, text: message, owner: true }]);
      setMessage(''); 
    }
  };

  return (
    <div id='chat' className='mt-20 flex justify-center'>
      <div id="container" className='w-[1300px] m-12'>
        <span id='breadcrums' className='flex flex-row gap-1 font-semibold text-md text-[#555]'>
          <Link href={'/messages'} className=''>Messages</Link>
          <span>{'>'} Daniel</span>
        </span>

        <div id="messages" className='my-8 mx-0 p-12 flex flex-col gap-12 h-[500px] overflow-y-scroll'>
          {messages.map((msg) => (
            <div key={msg.id} id="item" className={`flex gap-5 max-w-[600px] font-semibold ${msg.owner ? 'flex-row-reverse self-end' : ''}`}>
              <Image src={msg.owner ? "/images/teste.jpeg" : "/images/w2.jpg"} alt='/' width={1300} height={1300} className='rounded-full w-16 h-16 object-cover'/>
              <p className={`p-5 ${msg.owner ? 'bg-[#17a2b8] text-white rounded-se-none' : 'bg-[#e7e3e3] text-[#555] rounded-ss-none'} rounded-lg`}>
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        <hr className='h-0 border-[0.5px] border-solid mb-5'/>
        <div id="textsec" className='flex flex-row justify-center items-center gap-10'>
          <textarea
            placeholder='write a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols={30}
            rows={10}
            className='w-[80%] h-28 p-3 border border-[lightgray] rounded-lg resize-none'
          ></textarea>
          <button 
            className='w-36 p-2 rounded-lg text-white font-semibold bg-[#17a2b8]'
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage;
