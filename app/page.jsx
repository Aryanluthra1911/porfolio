'use client'
import Blurtxt from '@/components/Blurtxt'
import Button from '@/components/Button'
import LogoBlock from '@/components/LogoBlock'
import ProjectCard from '@/components/ProjectCard'
import Shinytxt from '@/components/Shinytxt'
import { useRouter } from 'next/navigation'
import React from 'react'



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
    const whatsappHandler = () => {
        window.open("https://wa.me/917048997027", "_blank")
    }
    const discordHandler = () => {
        window.open("https://discord.com/users/123456789012345678", "_blank")
    }

    const projectdetails = [{src:'/trackify.png',title:'Trackify',tech:['React JS','Node.js','Prisma','Express.js','JWT'],description:'Trackify is a Jewellery Sales Tracking & Billing app that helps jewellers manage sales, orders, and GST with speed and accuracy'},{src:'/taskmaster.png',title:'Taskmaster',tech:['HTML','CSS','JavaScript','Node.js','MongoDB','Express.js','JWT'],description:'TaskMaster is a secure to-do app with JWT authentication and MongoDB, ensuring private and reliable task management with a responsive UI'}]

    const techStacks = [{src:'/c++.svg',title:'C++'},{src:'/javascript.svg',title:'JavaScript'},{src:'/react.svg',title:'React'},{src:'/html.svg',title:'HTML'},{src:'/python.svg',title:'Python'},{src:'/css.svg',title:'css'},{src:'/tailwind.svg',title:'TailwindCSS'},{src:'/typescript.svg',title:'TypeScript'},{src:'/express.svg',title:'Express.js'},{src:'/node.svg',title:'Node.js'},{src:'/mongodb.svg',title:'MongoDB'},{src:'/postgre.svg',title:'PostgreSQL'},{src:'/next.svg',title:'Next.js'},{src:'/websockets.svg',title:'Web Sockets'},{src:'/git.svg',title:'Git'},,{src:'/prisma.svg',title:'Prisma'},{src:'/mysql.svg',title:'MySQL'},{src:'/bootstrap.svg',title:'Bootstrap'},{src:'/postman.svg',title:'Postman'},{src:'/npm.svg',title:'npm'},{src:'/vercel.svg',title:'Vercel'}]
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
            <div className='w-[55%] sm:w-[45%] h-full flex  items-center justify-around'>
              <Button src='/mail.svg' onClick={mailHandler} className={"w-4 lg:w-8 "}/>
              <Button src='/linkedin.svg' onClick={linkedinHandler} className={'w-4 lg:w-7'}/>
              <Button src='/github.svg' onClick={githubHandler}className={'w-4 lg:w-8 '}/>
              <Button src='/discord.svg' onClick={discordHandler} className={'w-4 lg:w-8 '}/>
              <Button src='/whatsapp.svg' onClick={whatsappHandler} className={'w-4 lg:w-8 '}/>
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
        <div className='w-[90%] lg:w-[70%] h-50 flex flex-col items-center'>
          <Blurtxt text='Experience' className='text-xl lg:text-4xl font-bold h-[15%] w-full'/>
        </div>
        <div className='w-[90%] lg:w-[70%] h-auto  flex flex-col items-center gap-10'>
          <div className='h-15 w-full flex justify-between items-center '>
            <Blurtxt text='Projects' className=' flex items-center justify-start text-xl lg:text-4xl font-bold'/>
            <div onClick={()=>{
              router.push('/projects')
            }} className='h-[20%]  flex items-center justify-baseline hover:underline hover:text-[#7a7a7a]'>
              <div className='h-full w-auto'>view all</div>
              <img src="/arrow.svg" alt="" className='h-5 w-5'/>
            </div>
          </div>
          {projectdetails.map((idx,key)=>(
            <ProjectCard src={idx.src} title={idx.title} tech={idx.tech} description={idx.description} key={key}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page