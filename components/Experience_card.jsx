import React from 'react'

const Experience_card = ({idx}) => {
    return (
        <div className='pt-6 pb-6 text-white text-2xl w-[97%] min-h-50 rounded-xl bg-[#161616]  border-l-2 flex flex-col justify-evenly items-center gap-4'>
            <div className='w-[95%] h-[20%] flex items-center text-lg lg:text-xl font-semibold gap-3'>
                <img className='w-10 h-10' src={idx.src} alt="" />
                {idx.company_name}
            </div>
            <div className='w-[90%] min-h-[75%] text-sm lg:text-lg  flex flex-col justify-around items-center'>
                <div className='w-full h-[20%] flex justify-between items-center'>
                    <div className=' text-sm lg:text-lg text-[#b3b3b3] font-semibold'>{idx.title}</div>
                    <div className=' text-xs sm:text-sm text-[#b3b3b3] font-semibold'>{idx.duration}</div>
                </div>
                <ul>
                    {idx.description.map((point,idx)=>(
                        <li key={idx} className='text-xs sm:text-sm lg:text-lg font-light'>
                            • {point}
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}

export default Experience_card