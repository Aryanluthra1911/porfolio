'use client'
import projectdetails from '@/data/projects'
import Blurtxt from '@/components/Blurtxt'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const page = () => {
    return (
        <div className='w-full h-auto bg-[#111111] text-white pt-25 flex justify-center'>
            <div className='h-auto  w-[90%] lg:w-[70%] flex flex-col justify-center items-center gap-10'>
                <div className='w-full h-auto flex flex-col items-center gap-10'>
                    <div className='h-15 w-full flex justify-between items-center '>
                        <Blurtxt text='Projects' className=' flex items-center justify-start text-4xl font-bold'/>
                    </div>
                </div>
                {projectdetails.map((idx,key)=>(
                    <ProjectCard idx={idx} key={key}/>
                ))}
            </div>
        </div>
    )
}

export default page