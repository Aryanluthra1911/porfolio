import React from 'react'

const ProjectCard = ({src,title,tech,description}) => {
    return (
        <div className="relative w-full h-125 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg shadow-black/40">
            {/* Image */}
            <img
                src={src}
                alt={title}
                className="w-full h-full object-cover rounded-4xl transition-all duration-500 brightness-75 group-hover:brightness-60 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-4xl"></div>

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {tech.map((idx,key)=>(
                        <span key={key} className="px-3 py-1 text-sm bg-white/20 rounded-md">{idx}</span>
                    ))}
                </div>
                <p className="mt-2 text-sm text-gray-200 max-w-md">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
