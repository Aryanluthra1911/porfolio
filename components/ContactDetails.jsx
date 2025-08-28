import React from 'react'
import Button from './Button'

const ContactDetails = () => {
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
        <div className='w-[80%] lg:w-[50%] h-auto space-y-12'>
            <div className='text-4xl font-semibold'>Contact Details</div>
            <div className='flex gap-5 flex-wrap'>
                <Button src='/mail.svg' onClick={mailHandler} className={"w-12"}/>
                <Button src='/linkedin.svg' onClick={linkedinHandler} className={'w-8'}/>
                <Button src='/github.svg' onClick={githubHandler}className={'w-11'}/>
                <Button src='/discord.svg' onClick={discordHandler} className={'w-12'}/>
                <Button src='/whatsapp.svg' onClick={whatsappHandler} className={'w-11'}/>
            </div>
        </div>
    )
}

export default ContactDetails