"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Layers, Wifi, Cpu } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col bg-dark text-white overflow-hidden">


            <div className="relative flex-grow flex items-center justify-center pt-12 pb-20">
                {/* Layered Background with Tech Theme */}
                <div className="absolute inset-0 z-0">
                    {/* Base Dark Gradient */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-[#0F172A] to-[#0B1120] opacity-95"></div>

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/hero_background.png"
                            alt="AI Technology Background"
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark"></div>
                    </div>

                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    </div>

                    {/* Tech Pattern Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10"
                    />

                    {/* Animated Tech Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-100px] right-[-100px] text-primary/10"
                    >
                        <Cpu size={600} strokeWidth={0.5} />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-50px] left-[-50px] text-accent/5"
                    >
                        <Wifi size={400} strokeWidth={1} />
                    </motion.div>

                    {/* Glowing Orbs for depth */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/30 blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]"
                    />
                </div>

                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        {/* Top Tagline */}
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary text-secondary bg-secondary/10 text-sm font-bold tracking-widest uppercase mb-4 shadow-glow-sm">
                                Hybrid Mode : Physical & Virtual
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading leading-tight tracking-tight">
                            <span className="block text-white mb-2">ICTAGI</span>
                            <span className="block text-secondary text-6xl md:text-8xl lg:text-9xl drop-shadow-2xl">
                                2026
                            </span>
                        </h1>

                        {/* Subheading */}
                        <div className="text-2xl md:text-3xl font-light mb-10 max-w-3xl mx-auto leading-normal">
                            <span className="text-white">International Conference on </span>
                            <span className="text-yellow-200 font-semibold">Transformative AI</span>
                            <span className="text-white"> for Global Impact</span>
                        </div>

                        {/* Dates & Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
                        >
                            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                                <Calendar className="text-secondary w-6 h-6" />
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
                                    <p className="text-xl font-bold text-white">12-14 Aug 2026</p>
                                </div>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/K97irhc1SXbj2men6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <MapPin className="text-accent w-6 h-6 group-hover:animate-bounce" />
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Venue</p>
                                    <p className="text-xl font-bold text-white leading-tight">Meenakshi Sundararajan<br />Engineering College, Chennai</p>
                                </div>
                            </a>
                        </motion.div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 mb-16">
                            <Link
                                href="/#registration"
                                className="group relative px-8 py-4 bg-accent text-white text-lg font-bold rounded-full hover:bg-accent-hover transition-all shadow-glow hover:shadow-glow-lg overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    REGISTER NOW <Sparkles size={18} />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </Link>
                            <Link
                                href="/#call-for-papers"
                                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                Submit Paper
                            </Link>
                        </div>

                        {/* Partner Logos Strip */}
                        <div className="w-full max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-12">
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-6 font-semibold">Our Organization & Industry Partners</p>
                            <div className="flex flex-wrap justify-center items-center gap-6">
                                {[
                                    // Publishers & Standards
                                    { name: "MSRC", logo: "/images/organizers/msrc.png" },
                                    { name: "IEEE", logo: "/images/partners/IEEE.jpg" },
                                    { name: "Springer", logo: "/images/partners/springer.png" },
                                    // International Companies
                                    { name: "ZF", logo: "/images/organizers/zf.jpg" },
                                    { name: "Virtusa", logo: "/images/organizers/virtusa.jpg" },
                                    // National (Indian) Organizations
                                    { name: "ISRO", logo: "/images/organizers/isro.jpg" },
                                    { name: "NIELIT", logo: "/images/organizers/nielit.jpg" },
                                    { name: "CDAC", logo: "/images/organizers/cdac.jpg" },
                                    { name: "NIOT", logo: "/images/organizers/niot.jpg" },
                                    // Others
                                    { name: "ARX", logo: "/images/organizers/arx.jpg" },
                                    // International Universities
                                    { name: "USM", logo: "/images/organizers/usm.jpg" },
                                    { name: "MMU", logo: "/images/organizers/mmu.jpg" },
                                    { name: "Chula", logo: "/images/organizers/chula.jpg" }

                                ].map((partner, index) => (
                                    <div
                                        key={index}
                                        className="h-16 w-32 bg-white rounded-lg flex items-center justify-center p-2 opacity-80 hover:opacity-100 hover:scale-105 transition-all shadow-lg"
                                        title={partner.name}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
