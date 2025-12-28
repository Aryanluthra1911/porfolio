import React from 'react'

const SkillBlock = ({label}) => {
    return (
        <button className='w-auto h-6 md-h-10 border-2 border-[#353535] hover:border-[#6f6f6f] rounded-2xl bg-gradient-to-b from-[#111111] to-[#1f1f1f]  text-xs md:text-2xl p-5 flex justify-center items-center transition-all duration-400 ease-out hover:shadow-lg hover:shadow-white'>{label}</button>
    )
}

export default SkillBlock