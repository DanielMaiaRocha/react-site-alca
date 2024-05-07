"use client"
import React from 'react'



function Card( imgURL, videoURL, name, description, country, language, price ) {
  return (
      <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{background: `url(${imgURL})`, backgroundSize: "cover"}}>      
          <div className="items-center justify-center absolute -top-20 left-[25rem] w-[50%] h-full rounded-lg border shadow-xl">
          <h5 className='text-xl font-semibold mb-2 '>{name}</h5> 
            <p className='text-[#ADB7BE]'>{description}</p>
            <div className='flex flex-row items-end justify-end h-9 mx-auto mt-52 md:mr-2 md:mt-56 gap-3'>
              <button className='bg-zinc-200 border shadow-lg  hover:bg-zinc-300 rounded-md w-32 p-1 text-lg font-medium'>Chat</button>
              <button className='bg-[#17a2b8] border shadow-lg  hover:bg-[#468089] rounded-md w-32 p-1 text-lg font-medium text-white'>Appoint</button>
          </div>
              
          </div>  
        </div>
  </div>
  )
}

export default Card