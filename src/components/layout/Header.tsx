"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    {
        name: "About",
        href: "/about",
        dropdown: [
            { name: "About ICTAGI", href: "/about" },
            { name: "About MSEC", href: "/about#msec" },
        ],
    },
    {
        name: "Call for Papers",
        href: "/call-for-papers",
    },
    { name: "Committee", href: "/program-committee" },
    { name: "Important Dates", href: "/#dates" },
    {
        name: "Registration",
        href: "/registration",
        dropdown: [
            { name: "Registration Fees", href: "/registration" },
            { name: "Submission Guidelines", href: "/paper-submission" },
        ],
    },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Banner */}
            <div className="bg-dark text-white py-2 overflow-hidden items-center hidden md:flex border-b border-white/10">
                <div className="container mx-auto flex items-center justify-between text-xs px-4">
                    <div className="flex gap-4">
                        <span>Scan QR to Register</span>
                        <span>|</span>
                        <span>ictagi@msec.edu.in</span>
                    </div>
                    <div className="flex gap-4">
                        <span>Meenakshi Sundararajan Engineering College</span>
                    </div>
                </div>
            </div>

            <header
                className={cn(
                    "sticky top-0 z-50 transition-all duration-300 w-full",
                    isScrolled ? "glass-header shadow-md py-2" : "bg-white py-4"
                )}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Optional: Add Logo Image Here */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-dark group-hover:text-primary transition-colors tracking-tight">
                                ICTAGI <span className="text-primary">2026</span>
                            </span>
                            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest leading-tight">
                                Transformative AI for Global Impact
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={14} />}
                                </Link>

                                {/* Dropdown */}
                                {link.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[200px] border border-gray-100 overflow-hidden"
                                            >
                                                {link.dropdown.map((dropItem) => (
                                                    <Link
                                                        key={dropItem.name}
                                                        href={dropItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-primary transition-colors"
                                                    >
                                                        {dropItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/registration"
                            className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
                        >
                            Register Now
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden p-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm xl:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl p-6 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold text-dark">
                                    ICTAGI 2026
                                </span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-gray-500 hover:text-red-500"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <div className="space-y-2">
                                                <div className="font-semibold text-gray-800 border-b border-gray-100 pb-1">
                                                    {link.name}
                                                </div>
                                                <div className="pl-4 flex flex-col gap-2">
                                                    {link.dropdown.map((dropItem) => (
                                                        <Link
                                                            key={dropItem.name}
                                                            href={dropItem.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="text-sm text-gray-600 hover:text-primary"
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
                                                className="block font-semibold text-gray-800 hover:text-primary border-b border-gray-100 pb-2"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <Link
                                    href="/registration"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-4 w-full py-3 bg-primary text-white font-bold text-center rounded-lg shadow-md"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
