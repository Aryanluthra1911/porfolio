"use client"
import Blurtxt from '@/components/Blurtxt'
import Button from '@/components/Button'
import Shinytxt from '@/components/Shinytxt'
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
    const discordHandler = () => {
        window.open("https://discord.com/users/123456789012345678", "_blank")
    }
    return (
        <div className='w-full h-auto bg-[#111111] text-white pt-25 flex justify-center'>
            <div className='2xl:w-[80%] md:w-[90%] h-auto flex flex-col justify-start items-center pt-6 space-y-25'>
                <div className='w-[80%] lg:w-[68%] h-auto space-y-12'>
                    <Blurtxt className='text-2xl sm:text-4xl font-semibold' text='Contact Details'/>
                    <div className='flex gap-5 flex-wrap'>
                        <Button src='/mail.svg' onClick={mailHandler} className={" w-8"}/>
                        <Button src='/linkedin.svg' onClick={linkedinHandler} className={'w-7 '}/>
                        <Button src='/github.svg' onClick={githubHandler}className={'w-8 '}/>
                        <Button src='/discord.svg' onClick={discordHandler} className={' w-8 '}/>
                    </div>
                </div>

                <div className='w-[90%] lg:w-[70%] h-40 flex justify-around flex-col border-b-3 border-[#353535]'>
                    <div>
                        <Shinytxt text={'Exploring new opportunities and open to meaningful conversations. Let’s connect!'} speed={2} className='text-xs font-semibold pl-4 sm:text-xl'/>         
                    </div>
                    <div className='flex w-full items-center justify-between'>
                        <Blurtxt text="Let's Get in Touch" className='text-2xl sm:text-4xl font-semibold pl-4'/>
                        <div onClick={linkedinHandler} className='flex w-40  text-lg sm:text-xl items-center justify-center hover:underline transition-all duration-300'>
                            Say Hi👋
                            <img src="/arrow.svg" alt="" className='w-8 h-8 '/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page