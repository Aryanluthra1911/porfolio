'use client'
import Blurtxt from '@/components/Blurtxt'
import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const page = () => {
    const projectdetails = [{src:'/trackify.png',title:'Trackify',tech:['React JS','Node.js','Prisma','Express.js','JWT'],description:'Trackify is a Jewellery Sales Tracking & Billing app that helps jewellers manage sales, orders, and GST with speed and accuracy'},{src:'/taskmaster.png',title:'Taskmaster',tech:['HTML','CSS','JavaScript','Node.js','MongoDB','Express.js','JWT'],description:'TaskMaster is a secure to-do app with JWT authentication and MongoDB, ensuring private and reliable task management with a responsive UI'}]
    return (
        <div className='w-full h-auto bg-[#111111] text-white pt-25 flex justify-center'>
            <div className='h-auto  w-[90%] lg:w-[70%] flex flex-col justify-center items-center gap-10'>
                <div className='w-full h-auto flex flex-col items-center gap-10'>
                    <div className='h-15 w-full flex justify-between items-center '>
                        <Blurtxt text='Projects' className=' flex items-center justify-start text-4xl font-bold'/>
                    </div>
                </div>
                {projectdetails.map((idx,key)=>(
                    <ProjectCard src={idx.src} title={idx.title} tech={idx.tech} description={idx.description} key={key}/>
                ))}

            </div>
        </div>
    )
}

export default page