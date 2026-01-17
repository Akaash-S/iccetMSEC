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
            { name: "About ICCET 2026", href: "/about" },
            { name: "About PSVPEC", href: "/about#psvpec" },
            { name: "Gallery (2012-2025)", href: "/gallery" },
        ],
    },
    {
        name: "Call for Papers",
        href: "/call-for-papers",
    },
    { name: "Program Committee", href: "/program-committee" },
    { name: "Speakers", href: "/speakers" },
    {
        name: "Paper Submission",
        href: "/paper-submission",
        dropdown: [
            { name: "Registration Process", href: "/registration" },
            { name: "Submission Guidelines", href: "/paper-submission#guidelines" },
            { name: "Template Downloads", href: "/paper-submission#templates" },
        ],
    },
    { name: "Accepted Papers", href: "/accepted-papers" },
    {
        name: "Journal Publications",
        href: "/journal-publications",
        dropdown: [
            { name: "Journal List", href: "/journal-publications" },
            { name: "Previous Year Publications", href: "/journal-publications#previous" },
            { name: "Publication Options", href: "/journal-publications#options" },
        ],
    },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
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
            {/* Top Publication Banner */}
            <div className="bg-gray-100 border-b border-gray-200 py-2 overflow-hidden items-center hidden md:flex">
                <div className="container mx-auto flex items-center">
                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded mr-3 shrink-0 uppercase tracking-wider">
                        Publications in:
                    </span>
                    <div className="overflow-hidden relative flex-1 h-6">
                        <p className="animate-marquee whitespace-nowrap absolute text-sm text-gray-700 font-medium">
                            All Registered papers of 'ICCET' will be published in Scopus Journal - Scopus Book Chapter - Web of Science - SCI - ESCIE - UGC - Annexure 1 & 2
                        </p>
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
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                                14th ICCET
                            </span>
                            <span className="text-sm font-semibold text-primary tracking-widest">
                                2026
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
                            Register
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
                                <span className="text-xl font-bold text-secondary">
                                    ICCET 2026
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
