"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-dark">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] opacity-90"></div>
                {/* Abstract Shapes */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[100px]"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-orange-600/10 blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-4 z-10 relative text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Institution Logos Row */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-10 opacity-90">
                        <div className="text-center group">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all border border-white/20">
                                <span className="text-xs text-center text-gray-300">PSVPEC Logo</span>
                            </div>
                            <p className="text-xs text-gray-400 max-w-[150px] mx-auto">
                                Prince Shri Venkateshwara Padmavathy Engineering College
                            </p>
                        </div>

                        <div className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 md:mb-0">
                            In Collaboration With
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all border border-white/20">
                                <span className="text-xs text-center text-gray-300">Samarkand Logo</span>
                            </div>
                            <p className="text-xs text-gray-400 max-w-[150px] mx-auto">
                                Samarkand State University, Uzbekistan
                            </p>
                        </div>
                    </div>

                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        14th INTERNATIONAL CONFERENCE ON CONTEMPORARY ENGINEERING AND
                        TECHNOLOGY
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10"
                    >
                        <div className="flex items-center gap-2 text-primary text-xl font-medium italic bg-orange-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-orange-500/20">
                            <span>Hybrid Conference</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-lg">
                            <Calendar className="text-secondary" />
                            <span>March 22nd – 23rd, 2026</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-gray-600"></div>
                        <div className="flex items-center gap-2 text-white text-lg">
                            <MapPin className="text-secondary" />
                            <span>Chennai, India</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link
                            href="/registration"
                            className="inline-block px-10 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:scale-105"
                        >
                            REGISTER NOW
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Shapes for decor */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-full h-[60px] md:h-[100px] fill-gray-50"
                >
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>
        </section>
    );
}
