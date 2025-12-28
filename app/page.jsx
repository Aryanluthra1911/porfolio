'use client'
import Blurtxt from '@/components/Blurtxt'
import Button from '@/components/Button'
import LogoBlock from '@/components/LogoBlock'
import ProjectCard from '@/components/ProjectCard'
import Shinytxt from '@/components/Shinytxt'
import { useRouter } from 'next/navigation'
import React from 'react'
import projectdetails from '@/data/projects'
import techStacks from '@/data/teckStacks'
import Experience_card from '@/components/Experience_card'
import experience from '@/data/experience'

const page = () => {
  const router = useRouter();
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
      <div className='w-[90%] h-auto flex flex-col justify-center items-center gap-8'>
        <div className=' w-[90%] lg:w-[70%] auto border-2 rounded-2xl border-[#353535] p-4 flex flex-col justify-around items-center'>
          <div className='w-full h-auto flex justify-between'>
            <div className=' w-[45%] sm:w-[50%] h-full flex flex-col'>
              <Blurtxt text="Hi, I'm Aryan Luthra 👋" className=' text-lg lg:text-3xl font-semibold '/>
              <div className='flex items-center'>
                <img src="/location.svg" alt="" className='w-5 h-5' />
                <Shinytxt text={` Delhi, India`} className='text-md lg:text-xl font-semibold' speed={'2'}/>
              </div>
            </div>
            <div className='w-[45%] sm:w-[35%] h-full flex  items-center justify-evenly'>
              <Button src='/mail.svg' onClick={mailHandler} className={"w-4 lg:w-8 "}/>
              <Button src='/linkedin.svg' onClick={linkedinHandler} className={'w-4 lg:w-7'}/>
              <Button src='/github.svg' onClick={githubHandler}className={'w-4 lg:w-8 '}/>
              <Button src='/discord.svg' onClick={discordHandler} className={'w-4 lg:w-8 '}/>
            </div>
          </div>
          <div className='w-full h-[50%] flex flex-col text-md md:text-xl justify-center items-center'>
            I’m a passionate Full-Stack Web Developer who loves building scalable, user-friendly, and impactful digital solutions. With a strong command over both frontend and backend
            <Shinytxt onClick={()=>{
              router.push("/about")
            }} className='text-md md:text-xl text-[#7a7a7a] font-semibold h-full w-full flex' text={'read more...'} speed={'3'}/>
            
          </div>
        </div>
        <div className='w-[90%] lg:w-[70%] h-auto p-2 gap-15 flex flex-col items-center'>
          <Blurtxt text='What I work with' className=' text-xl lg:text-4xl font-bold h-[15%] w-full'/>
          <div className='h-auto w-[95%] flex flex-wrap items-start gap-7'>
            {techStacks.map((idx,key)=>(
              <LogoBlock title={idx.title} src={idx.src} key={key}/>
            ))}
          </div>
        </div>
        <div className='w-[90%] lg:w-[70%] h-auto flex flex-col items-center'>
          <div className='min-h-15 w-full flex flex-col justify-between items-center gap-7'>
            <Blurtxt text='Experience' className='text-xl lg:text-4xl font-bold h-[15%] w-full'/>
            {experience.map((idx,key)=>{
              return <Experience_card idx={idx} key={key}/>
            })}
          </div>
        </div>
        <div className='w-[90%] lg:w-[70%] h-auto  flex flex-col items-center gap-10'>
          <div className='min-h-15 w-full flex justify-between items-center'>
            <Blurtxt text='Projects' className=' flex items-center justify-start text-xl lg:text-4xl font-bold'/>
            <div onClick={()=>{
              router.push('/projects')
            }} className=' min-h-[20%]  flex items-center justify-baseline hover:underline hover:text-[#7a7a7a]'>
              <div className='h-full w-auto'>view all</div>
              <img src="/arrow.svg" alt="" className='h-5 w-5'/>
            </div>
          </div>
          {projectdetails.map((idx,key)=>(
            <ProjectCard idx={idx} key={key}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page