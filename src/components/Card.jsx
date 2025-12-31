import React from 'react'
import { FaGithub } from 'react-icons/fa6'

export default function Card() {
  return (
    <>
        <div className='black-bg max-w-[300px] text-white rounded-md cursor-pointer'>
            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-md'/>

           <div className="container-text p-4 flex flex-col gap-5">
                <div className=''>
                    <p className='font-semibold cursor-text'>CRISP</p>
                    <p className='font-thin line-clamp-3 cursor-text'>A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mx-2 text-xs cursor-default">
                    <div className='rounded-full bg-[#21AE6C]/43 text-green-500 font-semibold text-center'>Laravel</div>
                    <div className='rounded-full bg-[#21AE6C]/43 text-green-500 font-semibold text-center'>Laravel</div>
                    <div className='rounded-full bg-[#21AE6C]/43 text-green-500 font-semibold text-center'>Laravel</div>
                </div>
                <div className='flex justify-evenly'>
                    <p className='flex gap-2 text-sm cursor-pointer transition-all ease-in hover:drop-shadow-[0_0_6px_#21AE6C]
                    hover:drop-shadow-[0_0_16px_#21AE6C]'>
                        <img src="/public/Github.png" alt="github-icon" />
                        Code
                    </p>
                    <p className='flex gap-2 text-sm whitespace-nowrap cursor-pointer transition-all ease-in hover:drop-shadow-[0_0_6px_#21AE6C]
                    hover:drop-shadow-[0_0_16px_#21AE6C]'>
                        <img src="/public/Globe.png" alt="github-icon" />
                        Live Demo
                    </p>
                </div>
           </div>
        </div>
    </>
  )
}
