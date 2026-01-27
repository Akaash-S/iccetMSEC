"use client";

import Image from "next/image";
import { User, Globe, Award } from "lucide-react";

const speakers = [
    {
        name: "Dr. Robert Chen",
        title: "Professor of Computer Science, Stanford University",
        topic: "The Future of Generative AI in Global Markets",
        bio: "Dr. Chen is a pioneer in large language models with over 20 years of experience. His research focuses on ethical AI deployment and its socioeconomic impacts.",
        image: null // Placeholder
    },
    {
        name: "Ms. Sarah Johnson",
        title: "Principal Researcher, DeepMind",
        topic: "Reinforcement Learning for Sustainable Energy",
        bio: "Ms. Johnson leads the sustainability initiatives at DeepMind. Her work on optimizing data center cooling has been adopted globally.",
        image: null // Placeholder
    },
    {
        name: "Mr. Prashanth Balasubramanian",
        title: "MD, Ragnar Technologies Pvt Ltd",
        topic: "Industrial IoT and AI Convergence",
        bio: "An industry veteran bridging the gap between hardware and intelligent software solutions for manufacturing sectors.",
        image: null
    },
    {
        name: "Mr. Deepak Rathnam",
        title: "CEO, Cetal",
        topic: "AI-Driven FinTech Innovations",
        bio: "Leading the charge in secure and scalable financial technologies powered by predictive analytics.",
        image: null
    }
];

export function KeynoteSpeakersSection() {
    return (
        <section className="py-20 bg-gray-50" id="speakers">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 font-heading">
                        KEYNOTE SPEAKERS
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow items-start"
                        >
                            {/* Photo */}
                            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 mx-auto md:mx-0 relative rounded-full overflow-hidden border-4 border-gray-50 shadow-inner bg-gray-200">
                                {speaker.image ? (
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                        <User size={48} />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-bold text-primary mb-1">{speaker.name}</h3>
                                <p className="text-sm font-medium text-blue-400 italic mb-3">{speaker.title}</p>

                                <div className="mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Topic</span>
                                    <p className="font-medium text-gray-800">{speaker.topic}</p>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {speaker.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
