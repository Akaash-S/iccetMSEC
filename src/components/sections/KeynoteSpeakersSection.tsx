"use client";

import Image from "next/image";
import { User, Globe, Award } from "lucide-react";

const speakers = [
    {
        name: "Mr. Jai Ganesh Suresh",
        title: "Senior AI Architect Lead, Valeo India Pvt. Ltd",
        email: "ganesh92jai@gmail.com",
        image: "/images/keynote/1.jpg"
    },
    {
        name: "Dr. Manjula Gandhi",
        title: "Associate Professor & Head (I/C), Department of Computing (Software Systems), Coimbatore Institute of Technology",
        email: null,
        image: null
    },
    {
        name: "Karthiganesh Durai",
        title: "Founder & CEO, Kwantumg Research Labs Pvt Ltd",
        email: "karthiganesh@kwantumg.com",
        image: "/images/keynote/3.jpg"
    },
    {
        name: "Dr. Balakrishnan S",
        title: "Associate Professor, Department of Physics, School of Advanced Sciences, Vellore Institute of Technology",
        email: "sbalakrishnan@vit.ac.in",
        image: "/images/keynote/4.jpg"
    },
    {
        name: "Dr. Shashi Kant Pandey",
        title: "Scientist C @SETS, Under the O/o Principal Scientific Advisor to the GOI",
        email: "shashikantshvet@gmail.com",
        image: null
    },
    {
        name: "Sasitharan Nagapan",
        title: "Associate Professor, Faculty of Civil Engineering and Built Environment, University Tun Hussein Onn Malaysia",
        email: "sasitharan@uthm.edu.my",
        image: "/images/keynote/6.jpg"
    },
    {
        name: "Dr Sathishkumar Veerappampalayam Easwaramoorthy",
        title: "Senior Lecturer, School of Computing and Artificial Intelligence, Sunway University, Malaysia",
        email: "sathishv@sunway.edu.my",
        image: "/images/keynote/7.jpg"
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
                                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2 leading-tight">{speaker.name}</h3>
                                <p className="text-sm font-medium text-gray-700 mb-4 leading-normal">{speaker.title}</p>

                                {speaker.email && (
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                        {speaker.email}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
