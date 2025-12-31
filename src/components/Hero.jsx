import React from 'react'
import { FaDownload } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div className='text-white flex justify-center items-center gap-3 flex-col h-[80vh]'>
        <p className='text-2xl poppins-semibold'>Hi, I'm Justin</p>
        <p className='text-3xl poppins-bold'>Fullstack Developer</p>
        <p className='text-2xl poppins-thin'>Building scalable web & mobile applications with clean copde.</p>
        <div className="flex gap-5 items-center">
            <button type='button' className='bg-black green-text px-5 py-2 rounded-lg poppins-regular cursor-pointer'>View Projects</button>
            <button type='button' className='green-bg text-black px-5 py-2 rounded-lg poppins-regular flex items-center gap-2 cursor-pointer'>Download CV <FaDownload/></button>
        </div>
    </div>
  )
}
