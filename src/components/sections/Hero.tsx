"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-dark text-white">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000] via-[#0F172A] to-[#1E1B4B] opacity-95"></div>
                {/* Network/AI Theme Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"
                />
                {/* Glowing Orbs */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/20 blur-[100px]"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-4 z-10 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Top Labels */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
                            Organized by MSEC
                        </span>
                        <span className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
                            Approved by AICTE
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
                        <span className="block text-2xl md:text-3xl font-normal text-gray-400 mb-2">International Conference on</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400 text-shadow-lg">
                            TRANSFORMATIVE AI
                        </span>
                        <br />
                        <span className="text-white">FOR GLOBAL IMPACT</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 italic font-light">
                        “Exploring how AI transforms industries, society, and sustainability”
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12"
                    >
                        <div className="flex items-center gap-3 text-white text-lg bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                            <Calendar className="text-primary" />
                            <span className="font-bold">12-14 Aug 2026</span>
                        </div>

                        <div className="flex items-center gap-3 text-white text-lg bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                            <MapPin className="text-secondary" />
                            <span className="font-bold">MSEC, Chennai, India</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/registration"
                            className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-all shadow-glow hover:shadow-glow-lg hover:scale-105 flex items-center gap-2"
                        >
                            <Sparkles size={20} />
                            REGISTER NOW
                        </Link>
                        <Link
                            href="/call-for-papers"
                            className="px-8 py-4 bg-white/10 text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 backdrop-blur-md"
                        >
                            Call for Papers
                        </Link>
                    </div>

                    {/* Partner Logos Strip */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Supported By</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300 bg-white/5 py-6 px-8 rounded-2xl backdrop-blur-sm border border-white/5">
                            {/* ISRO */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" alt="ISRO" className="h-full w-auto object-contain" />
                            </div>

                            {/* NIELIT */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/National_Institute_of_Electronics_%26_Information_Technology_logo.png/220px-National_Institute_of_Electronics_%26_Information_Technology_logo.png" alt="NIELIT" className="h-full w-auto object-contain" />
                            </div>

                            {/* C-DAC */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/C-DAC_Logo.png" alt="C-DAC" className="h-full w-auto object-contain" />
                            </div>

                            {/* NIOT */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://www.niot.res.in/niot1/images/niot_logo.png" alt="NIOT" className="h-full w-auto object-contain" />
                            </div>

                            {/* ZF */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/ZF_Friedrichshafen_AG_Logo.svg" alt="ZF" className="h-full w-auto object-contain" />
                            </div>

                            {/* Virtusa */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Virtusa_Logo.svg" alt="Virtusa" className="h-full w-auto object-contain" />
                            </div>

                            {/* Springer */}
                            <div className="bg-white p-2 rounded h-12 w-auto flex items-center justify-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Springer_Nature_Logo.svg/1024px-Springer_Nature_Logo.svg.png" alt="Springer" className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
