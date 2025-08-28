'use client'
import React, { useState } from 'react'

const LogoBlock = ({src, title}) => {
    const [hover, setHover] = useState(false)
    
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} className='h-15 w-15 flex flex-col justify-start items-center relative'>
            <div className={`h-[70%] w-full flex justify-center items-center transition-all duration-300 hover:shadow-md hover:scale-105`}>
                <img 
                    src={src} 
                    alt="" 
                    className={`h-full w-full object-contain transition-all duration-300 ${
                        hover ? 'filter-none' : 'grayscale'
                    }`}
                />
            </div>
            <div className={`
                text-[#7a7a7a] text-sm font-medium text-center px-1 
                transition-all duration-300 ease-in-out
                ${hover 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-2'
                }
            `}>
                {title}
            </div>
        </div>
    )
}

export default LogoBlock