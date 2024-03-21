import React from 'react';

function FilterSection() {
  return (
    <main className='flex flex-col items-center justify-center mb-52 md:mt-10  w-[95%] md:w-[95%] rounded-md p-1 mx-auto md:ml-10'>
      <div className='flex flex-col-5 justify-center items-center p-1'>
        <button className='flex justify-center items-center bg-[#17a2b8] hover:bg-[#468089] click rounded-md text-white p-1 mr-5 w-20 font-customFont4  md:hidden '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
          </svg>
        </button>
        <input type="text" placeholder='Search here: ' className='border rounded-lg border-zinc-300 w-64 md:w-64 p-[0.7rem] font-customFont4'/>
            <button className='relative right-8'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
        <select className='border solid border-zinc-300 rounded-lg p-3 hidden md:flex md:w-52'>
            <option value="#">Select a language:</option>
            <option>Portuguese</option>
            <option>English</option>
            <option>Madarim</option>
            <option>Deutsch</option>
            <option>Spanish</option>
            <option>Turkish</option>
        </select>
        <select className='border solid border-zinc-300 rounded-lg p-3 hidden md:flex md:w-52 ml-2'>
            <option value="#">Profession:</option>
            <option value="/">Dubbing Actor</option>
            <option value="/">Project Manager</option>
            <option value="/">Reviewer</option>
            <option value="/">Director</option>
        </select>
        <select className='border solid border-zinc-300 rounded-lg p-3 hidden md:flex md:w-52 ml-2'>
            <option value="/"></option>
            <option value="/"></option>
            <option value="/"></option>
            <option value="/"></option>
            <option value="/"></option>
            <option value="/"></option>
        </select>
        <button className='flex justify-center items-center bg-[#17a2b8] hover:bg-[#468089] click rounded-lg text-white font-semibold  p-3 mr-5 w-32 font-customFont4 ml-2'>Filter</button>
      </div>
    </main>
  );
}

export default FilterSection;
