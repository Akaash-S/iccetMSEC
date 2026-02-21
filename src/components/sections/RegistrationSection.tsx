"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function RegistrationSection() {
    return (
        <section className="py-20 bg-gray-50" id="registration">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 mb-8 font-heading">
                    REGISTRATION
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                </h2>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                    The registration fee includes conference materials, lunch, and refreshment.
                    Please choose your category below to proceed with registration.
                </p>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10 text-left max-w-lg mx-auto">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">1</span>
                            <span className="text-gray-800 font-medium">Presentation only</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">2</span>
                            <span className="text-gray-800 font-bold">Presentation and Scopus Publication</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdUiQ3npHVS8Y-xkYun-3plF8Q77k7o7t57SkR09kiyWz8ppQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-all"
                    >
                        Register Now <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
