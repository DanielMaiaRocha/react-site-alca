import React from 'react';

function FilterSection() {
  return (
    <main className='flex flex-col items-center justify-center mb-52 md:mt-10 border solid border-zinc-500 w-[95%] rounded-md p-1 ml-10'>
      <div className='flex flex-col-5 justify-center items-center p-1'>
        <input type="text" placeholder='Search here: ' className='border rounded-md border-black w-52 md:w-96 p-1 font-customFont3'/>
            <button className='relative right-8'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          <select className='border solid border-zinc-500 rounded-md p-1 w-72'>
              <option value="#">Select a category: </option>
              <option value="#">Dubbing Actor</option>
              <option value="#">Production Menager</option>
              <option value="#">Director</option>
              <option value="#">Operator</option>
              <option value="#">Translator</option>
              <option value="#">Reviewer</option>
          </select>
      </div>    
    </main>
  );
}

export default FilterSection;
