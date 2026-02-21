"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    { name: "MSRC", logo: "/images/organizers/msrc.png" },
    { name: "IEEE", logo: "/images/partners/IEEE.jpg" },
    { name: "Springer", logo: "/images/partners/springer.png" },
    { name: "ISRO", logo: "/images/organizers/isro.jpg" },
    { name: "NIELIT", logo: "/images/organizers/nielit.jpg" },
    { name: "CDAC", logo: "/images/organizers/cdac.jpg" },
    { name: "NIOT", logo: "/images/organizers/niot.jpg" },
    { name: "ZF", logo: "/images/organizers/zf.jpg" },
    { name: "Virtusa", logo: "/images/organizers/virtusa.jpg" },
    { name: "ARX", logo: "/images/organizers/arx.jpg" },
    { name: "USM", logo: "/images/organizers/usm.jpg" },
    { name: "MMU", logo: "/images/organizers/mmu.jpg" },
    { name: "Chula", logo: "/images/organizers/chula.jpg" },
];


export function PartnersSection() {
    return (
        <section className="py-20 bg-[#1a1a2e] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Our Organization & Industry Partners
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#E31E24] to-transparent mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition-all w-32 h-20 md:w-40 md:h-24 flex items-center justify-center group"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
