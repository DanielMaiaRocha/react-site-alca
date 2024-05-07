"use client"
import React, {useState} from 'react';
import Image from 'next/image';

function FilterSection() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <main className='flex items-center justify-center mt-10 mb-10'>
      <div className='flex flex-row gap-8'>
        <h1 className='absolute left-[57rem] -mt-12 flex flex-col items-center justify-center  font-customFont3 text-3xl font-bold'>Filters</h1>
          <button className='flex flex-col items-center justify-center mb-52 md:mt-10 border w-44 h-20 mx-auto md:ml-10 rounded-xl shadow-xl hover:-translate-y-1 hover:cursor-pointer hover:bg-[#17a2b8] hover:text-white is'> 
              <Image 
                src={'/images/microfon.png'}
                alt={'/'}
                width={40}
                height={40}
              />
              <span>Dubing Actor</span>
          </button>  
          <button className='flex flex-col items-center justify-center mb-52 md:mt-10 border w-44 h-20 mx-auto md:ml-10 rounded-xl shadow-xl hover:-translate-y-1 hover:cursor-pointer'> 
              <Image 
                    src={'/images/menager.png'}
                    alt={'/'}
                    width={40}
                    height={40}
                  />
              <span>Project Manager</span>
          </button>
          <button className='flex flex-col items-center justify-center mb-52 md:mt-10 border w-44 h-20 mx-auto md:ml-10 rounded-xl shadow-xl hover:-translate-y-1 hover:cursor-pointer'> 
              <Image 
                    src={'/images/claquete.png'}
                    alt={'/'}
                    width={35}
                    height={35}
                  />
              <span>Dubbing Director</span>
          </button>
          <button className='flex flex-col items-center justify-center mb-52 md:mt-10 border w-44 h-20 mx-auto md:ml-10 rounded-xl shadow-xl hover:-translate-y-1 hover:cursor-pointer'> 
              <Image 
                    src={'/images/papel.png'}
                    alt={'/'}
                    width={35}
                    height={35}
                  />
              <span>Revisor</span>
          </button>
          <button className='flex flex-col items-center justify-center mb-52 md:mt-10 border w-44 h-20 mx-auto md:ml-10 rounded-xl shadow-xl hover:-translate-y-1 hover:cursor-pointer hover:bg-[#17a2b8]'> 
              <Image 
                    src={'/images/translator.png'}
                    alt={'/'}
                    width={37}
                    height={37}
                  />
              <span>Translator</span>
              
          </button>
          <button className='flex flex-col items-center justify-center mb-52 md:mt-10 border w-44 h-20 mx-auto md:ml-10 rounded-xl shadow-xl hover:-translate-y-1 hover:cursor-pointer'> 
              <Image 
                    src={'/images/operator.png'}
                    alt={'/'}
                    width={37}
                    height={37}
                  />
              <span>Dubbing Operator</span>
          </button>

      </div>
    </main>
  );
}

export default FilterSection;
