'use client'
import React, { useState, useEffect } from 'react';


const Footer = () => {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 1100);

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <footer>
            <div className="flex justify-center items-center ">
                <img src='/logo.png' alt="logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
            </div>

            {isDesktop ? (
                <div className="flex flex-row justify-center text-2xl sm:text-4xl md:text-9xl font-bold w-full translate-y-2 h-20 overflow-hidden gap-1 md:gap-4 -tracking-[0.02em]">
                    <div>ARYAN..</div>
                    <div className="flex flex-col justify-center items-center text-[#acacac] text-xs mt-8 mb-4 tracking-[0em] font-light w-full">
                        <p>Built with ♡ | © {new Date().getFullYear()} ARYAN LUTHRA</p>
                        <p>Find more of my projects on <a href="https://github.com/Aryanluthra1911" className="text-white font-semibold">Github</a></p>
                    </div>
                    <div>LUTHRA</div>
                </div>
            ) : (
                <div>
                    <div className="flex flex-col justify-center items-center text-textSecondary text-xs mt-2 mb-4 tracking-[0em] font-light w-full">
                        <p>Built with ♡ | © {new Date().getFullYear()} ARYAN LUTHRA</p>
                        <p>Find more of my projects on <a href="https://github.com/Aryanluthra1911" className="text-white font-semibold">Github</a></p>
                    </div>
                    <div className="pt-2 sm:pt-0 flex justify-center text-5xl sm:text-6xl font-bold w-full translate-y-1 h-10 overflow-hidden gap-6 -tracking-[0.02em]">
                        <div>ARYAN</div>
                        <div>LUTHRA</div>
                    </div>
                </div>
            )}
        </footer>
    )
}

export default Footer;