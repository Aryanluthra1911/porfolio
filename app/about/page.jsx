"use client"
import Blurtxt from '@/components/Blurtxt'
import Button from '@/components/Button'
import ContactDetails from '@/components/ContactDetails'
import Shinytxt from '@/components/Shinytxt'
import SkillBlock from '@/components/SkillBlock'
import React from 'react'

const page = () => {
    const mailHandler = ()=>{
        window.open("mailto:aryanluthra1911@gmail.com", "_blank")
    }
    const linkedinHandler = ()=>{
        window.open('https://www.linkedin.com/in/aryanluthra1911/','_blank')
    }
    const githubHandler = ()=>{
        window.open('https://github.com/Aryanluthra1911','_blank')
    }
    const whatsappHandler = () => {
        window.open("https://wa.me/917048997027", "_blank")
    }
    const discordHandler = () => {
        window.open("https://discord.com/users/123456789012345678", "_blank")
    }
    return (
        <div className='w-full h-auto bg-[#111111] text-white pt-25 flex justify-center'>
            <div className='w-[90%] lg:w-[70%] h-auto flex flex-col justify-start items-start sm:items-center pt-6 space-y-10'>
                <Blurtxt className='text-3xl sm:text-4xl sm:w-[90%] w:[90%] h-20 font-semibold items-center' text='About Me'/>
                <Shinytxt text={'I’m a passionate Full-Stack Web Developer who loves building scalable, user-friendly, and impactful digital solutions. With a strong command over both frontend and backend development, I enjoy turning ideas into reality—whether it’s crafting smooth user interfaces or developing efficient server-side logic.'} className='w-[90%] text-lg sm:text-2xl' speed={2}/>
                <Shinytxt text={'My approach to development is user-first and performance-driven. I focus on writing clean, maintainable code and building products that not only work flawlessly but also deliver great experiences to the end users. Along with development, I also have an eye for UI/UX design, which helps me create solutions that are both functional and visually engaging.'} className='w-[90%] text-lg sm:text-2xl' speed={2}/>
                <Blurtxt className='text-3xl sm:text-4xl sm:w-[90%] w:[90%] h-20 font-semibold items-center' text='My Philosophy'/>
                <Shinytxt text={'I believe in continuous learning and problem-solving. Exploring new technologies and frameworks excites me, and I always aim to use the right tool for the job. For me, coding is not just about solving problems but about creating products that are efficient, scalable, and sustainable.'} className='w-[90%] text-lg sm:text-2xl' speed={2}/>
                <Shinytxt text={'Outside of coding, I love exploring new tech trends, taking part in hackathons, and sharing knowledge with fellow developers.'} className='w-[90%] text-lg sm:text-2xl' speed={2}/>
                <Shinytxt text={'I’m always open to collaborations, freelance projects, and exciting opportunities in web development. Let’s connect and build something impactful!'} className='w-[90%] text-lg sm:text-2xl' speed={2}/>
                <Blurtxt className='text-3xl sm:text-4xl sm:w-[90%] w:[90%] h-20 font-semibold items-center' text='My Skills'/>
                <div className='w-[90%] h-auto flex justify-start items-center flex-wrap gap-3'>
                    <SkillBlock label={'C/C++'}/>
                    <SkillBlock label={'JavaScript'}/>
                    <SkillBlock label={'Python'}/>
                    <SkillBlock label={'HTML'}/>
                    <SkillBlock label={'CSS'}/>
                    <SkillBlock label={'React'}/>
                    <SkillBlock label={'TailwindCSS'}/>
                    <SkillBlock label={'TypeScript'}/>
                    <SkillBlock label={'Bootstrap'}/>
                    <SkillBlock label={'Express.js'}/>
                    <SkillBlock label={'Node.js'}/>
                    <SkillBlock label={'MongoDB'}/>
                    <SkillBlock label={'PostgreSQL'}/>
                    <SkillBlock label={'MySQL'}/>
                    <SkillBlock label={'Next.js'}/>
                    <SkillBlock label={'Web Sockets'}/>
                    <SkillBlock label={'Supabase'}/>
                    <SkillBlock label={'NeonDB'}/>
                    <SkillBlock label={'Vercel'}/>
                    <SkillBlock label={'Render'}/>
                    <SkillBlock label={'Prisma'}/>
                    <SkillBlock label={'Git/Github'}/>
                    <SkillBlock label={'Redux'}/>
                    <SkillBlock label={'Redux-Toolkit'}/>
                    <SkillBlock label={'REST APIs'}/>
                    <SkillBlock label={'OOPs'}/>
                    <SkillBlock label={'DSA'}/>
                    <SkillBlock label={'DBMS'}/>
                    <SkillBlock label={'Postman'}/>

                </div>
                <div className='w-[80%] lg:w-[90%] h-auto space-y-12'>
                    <Blurtxt className='text-3xl sm:text-4xl font-semibold' text='Contact Details'/>
                    <div className='flex gap-5 flex-wrap'>
                        <Button src='/mail.svg' onClick={mailHandler} className={" w-8 sm:w-12"}/>
                        <Button src='/linkedin.svg' onClick={linkedinHandler} className={'w-7 sm:w-8'}/>
                        <Button src='/github.svg' onClick={githubHandler}className={'w-8 sm:w-11'}/>
                        <Button src='/discord.svg' onClick={discordHandler} className={' w-8 sm:w-12'}/>
                        <Button src='/whatsapp.svg' onClick={whatsappHandler} className={'w-8 sm:w-11'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page