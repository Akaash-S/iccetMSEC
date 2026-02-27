"use client";

import React from "react";

const items = [
    "Paper Submission Deadline: 31st March 2026",
    "Selected papers will be published in Springer Journal",
    "Extended papers are eligible for publication in Springer Journal",
    "Hybrid Mode Conference: Physical & Virtual Participation",
    "Keynote Speakers from Global Top Universities",
];


export function RunningHighlights() {
    return (
        <div className="w-full bg-[#E31E24] text-white py-2 overflow-hidden relative z-40 border-b border-white/10">
            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee 25s linear infinite;
                }
            `}</style>

            <div className="flex items-center">
                {/* "LATEST UPDATES" badge */}
                <span className="bg-[#003366] text-white text-xs font-bold px-4 py-2 absolute left-0 z-10 shadow-md whitespace-nowrap">
                    LATEST UPDATES
                </span>

                {/* Scrolling ticker — padded left so it starts after the badge */}
                <div className="overflow-hidden w-full pl-[150px]">
                    <div className="marquee-track">
                        {/* Copy 1 */}
                        {items.map((item, index) => (
                            <span
                                key={`a-${index}`}
                                className="flex items-center gap-2 text-sm font-medium tracking-wide mr-12 whitespace-nowrap"
                            >
                                <span className="w-2 h-2 bg-yellow-400 rounded-full shrink-0"></span>
                                {item}
                            </span>
                        ))}
                        {/* Copy 2 — identical, creates seamless loop */}
                        {items.map((item, index) => (
                            <span
                                key={`b-${index}`}
                                className="flex items-center gap-2 text-sm font-medium tracking-wide mr-12 whitespace-nowrap"
                            >
                                <span className="w-2 h-2 bg-yellow-400 rounded-full shrink-0"></span>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
