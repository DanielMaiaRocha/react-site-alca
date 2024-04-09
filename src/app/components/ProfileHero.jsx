"use client"
import { useState } from 'react';
import Image from 'next/image';

const ProfileHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const [videoPreview, setVideoPreview] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedVideo(selectedFile);
    setVideoPreview(URL.createObjectURL(selectedFile));
  };

  const handleCancelUpload = () => {
    setSelectedVideo(null);
    setVideoPreview(null);
  };

  return (
    <main className='flex mx-auto justify-center items-center -mt-[19.5rem] border rounded shadow-xl w-[50%] '>
      <form className='flex flex-col-2 -ml-[15rem]'>
        <div className='flex mt-60 ml-[20rem] '>
          <span className='text-md font-customFont4 font-semibold'>Rating: </span>
          <div className='flex flex-row'>
            <span className='font-customFont4 font-semibold'>5</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gold" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
        </div>
        <div className='relative -left-[10rem] m-2 ml-[-0.10rem] rounded-full w-52 h-52 object-cover cursor-pointer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput">
            <Image
              src={file ? URL.createObjectURL(file) : "/images/profile-bg.png" }
              alt='/'
              width={1500}
              height={1500}
              className='absolute top-[-0.5rem] left-[-0.5rem] flex m-2 rounded-full w-52 h-52 object-cover cursor-pointer'
            />
            {isHovered && (
              <div className="absolute w-full h-full rounded-full flex flex-col gap-1 justify-center items-center bg-black bg-opacity-60 text-white cursor-pointer">
                <span className='text-lg font-customFont4 font-semibold'>Change Image</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 font-semibold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
              </div>
            )}
          </label>
        </div>
        <div className='flex flex-col p-1 -ml-28 mt-10 gap-1'>
          <span className='text-md font-customFont4 font-semibold'>Your Name:</span>
          <input type="text" placeholder='Edit your Name:' className='rounded border border-zinc-600 w-52' />

          <span className='text-md font-customFont4 font-semibold'>Your profession:</span>
          <select className='rounded border w-52 border-zinc-600'>
            <option value="/">Choose your profession:</option>
            <option value="/">Dubbing Actor</option>
            <option value="/">Project Manager</option>
            <option value="/">Reviewer</option>
            <option value="/">Director</option>
          </select>

          <span className='text-md font-customFont4 font-semibold mt-2' >Description:</span>
          <textarea cols="30" rows="10" className='border solid border-zinc-600 rounded  mb-5 resize-none w-96' placeholder='Speak about yourself!'></textarea>
        </div>
        <button className='flex justify-center items-center mt-[26rem] ml-[8rem] bg-[#17a2b8] p-2 w-20 h-8 rounded-md font-[600] font-customFont4 text-white hover:bg-[#468089]'>Save</button>
      </form>
      
     
      <form className='flex absolute left-[44rem] top-[43rem] flex-col-2 justify-center items-center -ml-[15rem] border shadow-xl rounded w-[50%] h-[20vh]'>
      <div className='flex flex-col justify-center p-1  gap-1 items-center'>
        <label htmlFor="videoInput" className="text-md font-customFont4 font-semibold">Upload Video:</label>
        <input type="file" id="videoInput" accept="video/*" className="hidden" onChange={handleVideoChange} />
        {selectedVideo ? (
          <div className="flex items-center mt-2">
            <span className="text-blue-500">{selectedVideo.name}</span>
            <button type="button" className="ml-2 text-red-500" onClick={handleCancelUpload}>Cancel</button>
          </div>
        ) : (
          <label htmlFor="videoInput" className="bg-[#17a2b8] hover:bg-[#468089] text-white font-bold py-2 px-4 rounded cursor-pointer">Choose Video</label>
        )}
      </div>
      {videoPreview && (
        <video controls className="w-[150px] h-[180px]  ml-[10px] flex flex-auto justify-center items-center">
          <source src={videoPreview} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <button className='flex justify-center items-center mt-auto bg-[#17a2b8]  w-20 h-8 rounded-md font-[600] font-customFont4 text-white hover:bg-[#468089]'>Upload</button>
    </form>
    </main>
  );
};

export default ProfileHero;