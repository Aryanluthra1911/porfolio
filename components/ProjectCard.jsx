import React from 'react'

const ProjectCard = ({idx}) => {
    if (!idx) return null
    return (
        <div onClick={()=>{
            window.open(idx.link,'blank')
        }} className="relative w-full h-125 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg shadow-black/40">
            <img
                src={idx.src}
                alt={idx.title}
                className="w-full h-full object-cover rounded-4xl transition-all duration-500 brightness-75 group-hover:brightness-60 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-4xl"></div>

            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">{idx.title}</h3>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {idx.tech.map((idx1,key)=>(
                        <span key={key} className="px-3 py-1 text-sm bg-white/20 rounded-md">{idx1}</span>
                    ))}
                </div>
                <p className="mt-2 text-sm text-gray-200 max-w-md">
                    {idx.description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
