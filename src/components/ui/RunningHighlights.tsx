"use client";

import React from "react";
import { motion } from "framer-motion";

export function RunningHighlights() {
    return (
        <div className="w-full bg-[#E31E24] text-white py-2 overflow-hidden relative z-40 border-b border-white/10">
            <div className="flex items-center">
                <span className="bg-[#003366] text-white text-xs font-bold px-4 py-2 absolute left-0 z-10 shadow-md">
                    LATEST UPDATES
                </span>
                <div className="flex overflow-hidden w-full mask-gradient-to-r">
                    <motion.div
                        className="flex items-center gap-12 whitespace-nowrap pl-[150px]"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed
                        }}
                    >
                        {[
                            "Abstract Submission Deadline: October 2025",
                            "Selected papers will be published in Scopus Indexed Journals",
                            "Hybrid Mode Conference: Physical & Virtual Participation",
                            "Keynote Speakers from Global Top Universities",
                        ].map((item, index) => (
                            <span key={index} className="flex items-center gap-2 text-sm font-medium tracking-wide">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                {item}
                            </span>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[
                            "Abstract Submission Deadline: October 2025",
                            "Selected papers will be published in Scopus Indexed Journals",
                            "Hybrid Mode Conference: Physical & Virtual Participation",
                            "Keynote Speakers from Global Top Universities",
                        ].map((item, index) => (
                            <span key={`dup-${index}`} className="flex items-center gap-2 text-sm font-medium tracking-wide">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
