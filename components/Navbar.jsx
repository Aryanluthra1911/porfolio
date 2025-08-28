"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const resumeHandler = () => {
        window.open("https://drive.google.com/file/d/1qeSVa2Gu43Sy1yFSFwv3yYc0NyMPQ6Pp/view?usp=drive_link", "_blank")
    }
    const router = useRouter()
    return (
        <div className='h-20 w-full bg-[#111111]/20 backdrop-blur-md  border-white/10 flex justify-around fixed top-0 z-50'>
            <div onClick={() => {
                router.push("/");
                }} className='h-full w-[15%] flex justify-center items-center'>
                <div className='relative group cursor-pointer'>
                    {/* Rotating border animation */}
                    <div className='absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-sm'></div>
                    
                    {/* Floating animation */}
                    <Image 
                        src="/logo.png" 
                        alt="logo" 
                        width={70} 
                        height={70}
                        className='relative z-10 transition-all duration-700 ease-out hover:scale-125 group-hover:rotate-[360deg] animate-bounce hover:animate-none drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]'
                    />
                    
                    {/* Pulsing glow rings */}
                    <div className='absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 animate-ping transition-opacity duration-500'></div>
                    
                    {/* Static glow */}
                    <div className='absolute inset-0 w-16 h-16 top-2 left-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 blur-md opacity-0 group-hover:opacity-40 transition-all duration-700'></div>
                </div>
            </div>
            
            <div className='h-full w-[30%]'>
                <ul className='flex justify-evenly items-center h-full w-full text-xl text-gray-200'>
                    <li onClick={() => {
                        router.push("/");
                    }} className='hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4'>
                        Home
                    </li>
                    <li onClick={() => {
                        router.push("/about");
                    }}className='hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4'>
                        About
                    </li>
                    <li onClick={() => {
                        router.push("/projects");
                    }}className='hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4'>
                        Projects
                    </li>
                    <li onClick={() => {
                        router.push("/contact");
                    }}className='hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4'>
                        Contact Me
                    </li>
                </ul>
            </div>
            
            <div className='h-full w-[15%] flex justify-center items-center'>
                <button 
                    onClick={() => {
                        resumeHandler()
                    }} 
                    className=' text-black bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white w-37 h-[50%] rounded-2xl flex justify-center items-center text-xl font-medium border-2 border-white/20 gap-2 hover:scale-105 hover:shadow-lg hover:shadow-white/25 transition-all duration-300 group'
                >
                    <img 
                        src='/resume.svg' 
                        alt="" 
                        className='h-8 w-8 group-hover:rotate-12 transition-transform duration-300'
                    />
                    Resume
                </button>
            </div>
        </div>
    )
}

export default Navbar