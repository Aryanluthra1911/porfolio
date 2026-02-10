"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const resumeHandler = () => {
        window.open(
            "https://drive.google.com/file/d/1Lg5VcfCXkQMDLbvUt15zt4rqnoaXOqBF/view?usp=sharing",
            "_blank"
        );
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-[#111111]/20 backdrop-blur-md border-b border-white/10">
            <nav className="h-20 mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <button
                    onClick={() => router.push("/")}
                    className="relative group cursor-pointer h-20 w-20 shrink-0"
                    aria-label="Go to home"
                >
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="relative z-10 transition-all duration-700 ease-out hover:scale-125 group-hover:rotate-[360deg] animate-bounce hover:animate-none drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                    />
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 animate-ping transition-opacity duration-500" />
                    <span className="absolute top-2 left-2 h-16 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 blur-md opacity-0 group-hover:opacity-40 transition-all duration-700" />
                </button>

                {/* Desktop nav (shown at lg and up) */}
                <ul className="hidden lg:flex items-center gap-8 text-xl text-gray-200">
                    <li
                        onClick={() => router.push("/")}
                        className="hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4"
                    >
                        Home
                    </li>
                    <li
                        onClick={() => router.push("/about")}
                        className="hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4"
                    >
                        About
                    </li>
                    <li
                        onClick={() => router.push("/projects")}
                        className="hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4"
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => router.push("/contact")}
                        className="hover:font-bold transition-all duration-200 cursor-pointer hover:underline underline-offset-4"
                    >
                        Contact Me
                    </li>
                </ul>

                {/* Desktop CTA (shown at lg and up) */}
                <div className="hidden lg:flex">
                    <button
                        onClick={resumeHandler}
                        className="text-black bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white px-5 h-10 rounded-2xl flex items-center text-lg font-medium border-2 border-white/20 gap-2 hover:scale-105 hover:shadow-lg hover:shadow-white/25 transition-all duration-300 group"
                    >
                        <img
                            src="/resume.svg"
                            alt=""
                            className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300"
                        />
                        Resume
                    </button>
                </div>

                {/* Mobile hamburger (shown below lg) */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg白/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile menu (collapses into hamburger below lg) */}
            {open && (
                <div
                    id="mobile-menu"
                    className="lg:hidden absolute top-20 left-0 right-0 mx-4 rounded-xl bg-[#111111]/90 border border-white/10 backdrop-blur-md p-4"
                >
                    <ul className="flex flex-col gap-3 text-gray-200 text-lg">
                        <li>
                            <button
                                onClick={() => {
                                    router.push("/");
                                    setOpen(false);
                                }}
                                className="w-full text-left hover:underline underline-offset-4 py-2"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    router.push("/about");
                                    setOpen(false);
                                }}
                                className="w-full text-left hover:underline underline-offset-4 py-2"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    router.push("/projects");
                                    setOpen(false);
                                }}
                                className="w-full text-left hover:underline underline-offset-4 py-2"
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    router.push("/contact");
                                    setOpen(false);
                                }}
                                className="w-full text-left hover:underline underline-offset-4 py-2"
                            >
                                Contact Me
                            </button>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <button
                            onClick={() => {
                                resumeHandler();
                                setOpen(false);
                            }}
                            className="w-full text-black bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white h-11 rounded-2xl flex items-center justify-center text-lg font-medium border-2 border-white/20 gap-2 hover:scale-[1.01] hover:shadow-lg hover:shadow-white/25 transition-all duration-300 group"
                        >
                            <img
                                src="/resume.svg"
                                alt=""
                                className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300"
                            />
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;