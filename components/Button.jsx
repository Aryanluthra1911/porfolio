import React from 'react'

const Button = ({src,onClick, className}) => {
    return (
        <div onClick={onClick} className=' border-2 w-12 h-12 sm:w-15 sm:h-15 rounded-2xl flex justify-center items-center bg-gradient-to-b from-[#111111] to-[#1f1f1f] border-[#353535] hover:bg-gradient-to-b hover:from-[#111111] hover:to-[#2c2c2c] transition-all duration-300 '>
            <img src={src} alt=""  className={`${className} transition-all duration-300`}/>
        </div>
    )
}

export default Button