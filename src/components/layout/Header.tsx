"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Speakers", href: "/#speakers" },
    { name: "Publications", href: "/#publications" },
    { name: "Committee", href: "/#committee" },
    { name: "Call For Papers", href: "/#call-for-papers" },
    { name: "Paper submission", href: "/#paper-submission" },
    { name: "Sponsorship", href: "/#sponsorship" },
    // {
    //     name: "Workshop",
    //     href: "#",
    //     dropdown: [
    //         { name: "Workshop by CoreEL technologies", href: "#" },
    //         { name: "Workshop by ElenTech Engineering", href: "#" },
    //         { name: "Workshop by Transformation in Automotive", href: "#" },
    //         { name: "Workshop in Statistical Tools", href: "#" },
    //         { name: "Workshop on 3D Printing", href: "#" },
    //     ],
    // },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-200",
                scrolled ? "shadow-md py-1" : "py-2"
            )}
        >
            <div className="container mx-auto px-4 max-w-[1600px] flex items-center justify-between">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-4 group shrink-0">
                    <div className="flex items-center gap-3">
                        {/* Circle Logo Placeholder */}
                        <div className="relative w-12 h-12 flex items-center justify-center bg-[#003366] rounded-full text-white font-serif font-bold text-xl border-2 border-[#E31E24] shadow-sm">
                            MSEC
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base sm:text-lg md:text-xl font-bold text-[#003366] leading-none uppercase tracking-wide group-hover:text-[#E31E24] transition-colors">
                                MEENAKSHI SUNDARARAJAN
                            </span>
                            <span className="text-base sm:text-lg md:text-xl font-bold text-[#003366] leading-none uppercase tracking-wide group-hover:text-[#E31E24] transition-colors">
                                ENGINEERING COLLEGE
                            </span>
                            {/* <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-widest mt-0.5">
                                Meenakshi Sundararajan Engineering College
                            </span> */}
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-5 2xl:gap-8 ml-auto mr-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-[15px] font-bold text-[#003366] hover:text-[#E31E24] transition-colors flex items-center gap-0.5 py-4",
                                    link.name === "Call For Papers" && "text-[#003366]"
                                )}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className="mt-0.5 opacity-60" />}
                            </Link>

                            {/* Dropdown */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-md border-t-4 border-[#E31E24] overflow-hidden"
                                        >
                                            {link.dropdown.map((dropItem, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={dropItem.href}
                                                    className="flex items-start gap-2 px-4 py-3 text-sm text-[#003366] hover:bg-gray-50 hover:text-[#E31E24] transition-colors border-b border-gray-100 last:border-0 font-medium"
                                                >
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E31E24] shrink-0"></span>
                                                    <span className="leading-tight">{dropItem.name}</span>
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Side: Register Button */}
                <div className="flex items-center gap-4 shrink-0">
                    {/* Register Button */}
                    <Link
                        href="/#registration"
                        className="hidden xl:block px-8 py-2.5 bg-[#E31E24] text-white font-bold text-sm uppercase tracking-wide rounded-sm shadow-sm hover:bg-red-700 transition-colors"
                    >
                        Register
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden p-2 text-[#003366]"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl p-6 overflow-y-auto border-l-4 border-[#E31E24]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                                <span className="text-xl font-bold text-[#003366]">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-gray-400 hover:text-[#E31E24] transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <div className="py-2">
                                                <div className="font-bold text-[#003366] px-2 mb-2 uppercase text-sm tracking-wider">
                                                    {link.name}
                                                </div>
                                                <div className="pl-4 border-l-2 border-[#E31E24]/20 ml-2 space-y-2">
                                                    {link.dropdown.map((dropItem, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={dropItem.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block text-sm text-gray-600 hover:text-[#E31E24] py-1 font-medium"
                                                        >
                                                            {dropItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block font-bold text-[#003366] hover:text-[#E31E24] hover:bg-gray-50 px-3 py-2 rounded transition-colors text-lg"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <Link
                                    href="/#registration"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-6 w-full py-3 bg-[#E31E24] text-white font-bold text-center rounded-sm shadow hover:bg-red-700 transition-colors uppercase tracking-widest"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
