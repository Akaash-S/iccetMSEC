"use client";

import { motion } from "framer-motion";

const advisoryCommittee = [
    {
        name: "Dr. R Brakaspathy",
        role: "R&D Advisor",
        aff: "Indian Institute of Technology, Chennai",
        email: "rbpathy@gmail.com",
        phone: "9443412249"
    },
    {
        name: "Dr. Arockia Rajan A",
        role: "Professor, Department of Applied Mathematics",
        aff: "IIT Madras, Chennai",
        email: "aarajan@iitm.ac.in",
        phone: "9884953470"
    },
    {
        name: "Dr. V. Jothiprakash",
        role: "Professor (HAG), Department of Civil Engineering",
        aff: "Indian Institute of Technology Bombay, Mumbai",
        email: "vprakash@iitb.ac.in",
        phone: "9869312842"
    },
    {
        name: "Dr. V. Balasubramanian",
        role: "Professor & Director, Cemajor Manufacturing Engg.",
        aff: "Annamalai University, Annamalai Nagar",
        email: "visvabalu@yahoo.com",
        phone: "9443412249"
    },
    {
        name: "Dr. J. M. Mallikarjuna",
        role: "Professor, Internal Combustion Engines Laboratory, Dept. of Mechanical Engineering",
        aff: "Indian Institute of Technology Madras (IITM)",
        email: "jmmallik@iitm.ac.in",
        phone: "9444931941"
    },
    {
        name: "Dr. V. Mary Anita Rajam",
        role: "Professor and Head, Department of Computer Science and Engineering",
        aff: "College of Engineering Guindy, Anna University",
        email: "anitav@annauniv.edu",
        phone: "9840700071"
    },
    {
        name: "Dr. S. Albert Alexander",
        role: "Professor, School of Electrical Engineering",
        aff: "Vellore Institute of Technology",
        email: "albert.alexander@vit.ac.in",
        phone: "9865931597"
    }
];

// ... (advisoryCommittee definitions are above)

const technicalCommittee = [
    {
        name: "Dr. J. Jeyanti",
        role: "Professor and HoD, Department of Industrial Biotechnology",
        aff: "Government College of Technology (GCT), Coimbatore",
        email: "jjeyanthi@gct.ac.in",
        phone: "9843644570"
    },
    {
        name: "Dr. S. Vidhusha",
        role: "Associate Professor, Dept of Computer Science and Engineering",
        aff: "Shiv Nadar University, Chennai",
        email: "vidhushas@snuchennai.edu.in",
        phone: "044–2746 1700"
    },
    {
        name: "Soheil Nazarian",
        role: "Director ASPIRE NSF ERC, Professor Civil Engineering",
        aff: "Center for Transportation Infrastructure Systems (CTIS), UTEP, USA",
        email: "nazarian@utep.edu",
        phone: "(915) 747-6911"
    },
    {
        name: "Dr. Navaneethan C. Arjuman",
        role: "Senior Lecturer, Faculty of Computing and Information",
        aff: "Multimedia University (MMU), Malaysia",
        email: "navaneethan@mmu.edu.my",
        phone: "+6038312 5696"
    },
    {
        name: "Dr. A. Kavitha",
        role: "Prof and Head, Dept of BME",
        aff: "SSN College of Engineering",
        email: "kavithaa@ssn.edu.in",
        phone: "+91 44 2746 9700"
    },
    {
        name: "Dr. V. Jothiprakash",
        role: "Professor, Department of Civil Engineering",
        aff: "Indian Institute of Technology Bombay, Mumbai, India",
        email: "vprakash@iitb.ac.in",
        phone: "91 - 022 - 25767315"
    },
    {
        name: "Dr. A. Chandrasekaran",
        role: "Associate Professor",
        aff: "SSN College of Engineering, Chennai",
        email: "chandrasekarana@ssn.edu.in"
    },
    {
        name: "Dr. Brilly S Sangeetha",
        role: "Principal",
        aff: "IES College of Engineering, Kerala, India",
        email: "principal@iesce.info"
    },
    {
        name: "Dr. K. Selvakumar",
        role: "Assist. Professor",
        aff: "NIT Tiruchirappalli, Tamilnadu",
        email: "kselvakumar@nitt.edu"
    },
    {
        name: "Dr. Abdul Hossein",
        role: "Professor, Mechanical Engineering Department",
        aff: "Aston University, Birmingham, United Kingdom",
        email: "A.K.HOSSAIN@ASTON.AC.UK"
    },
    {
        name: "Dr. Malaya Kumar Nath",
        role: "Assistant Professor, Department of Electronics & Communication Engineering",
        aff: "NIT Puducherry, India",
        email: "malaya.nath@nitpy.ac.in"
    },
    {
        name: "Dr. K. Senthilkumaran",
        role: "Associate Professor",
        aff: "Indian Institute of Information Technology, Design and Manufacturing (IIITDM)",
        email: "skumaran@iiitdm.ac.in"
    },
    {
        name: "Adeline Sneha J",
        role: "Senior Lecturer",
        aff: "Asia Pacific University of Technology and Innovation, Malaysia",
        email: "j.adelinesneha@gmail.com"
    },
    {
        name: "Wasim Haidar",
        role: "College of Computing and Information Sciences",
        aff: "University of Technology and Applied Sciences-Salalah, Oman",
        email: "wasims5@gmail.com"
    },
    {
        name: "Dr. S. Arulvel",
        role: "Associate Professor, Department of Design and Automation",
        aff: "Vellore Institute of Technology, Vellore, India",
        email: "arulvel.s@vit.ac.in"
    }
];

export function CommitteeSection() {
    return (
        <section className="py-20 bg-white" id="committee">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Advisory Committee */}
                <div className="mb-20">
                    <div className="text-center mb-10 relative">
                        <h3 className="text-2xl font-bold text-primary inline-block bg-white px-4 relative z-10">
                            ADVISORY COMMITTEE
                        </h3>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-0"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {advisoryCommittee.map((member, i) => (
                            <div key={i} className="flex flex-col border-l-4 border-accent/20 pl-5 hover:border-accent transition-all group">
                                <span className="font-bold text-lg text-primary group-hover:text-accent transition-colors mb-1">{member.name}</span>
                                {member.role && <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{member.role}</span>}
                                <span className="text-sm text-gray-700 font-medium leading-snug mb-2">{member.aff}</span>
                                {member.email && (
                                    <span className="text-xs text-blue-600 mt-auto flex items-center gap-1">
                                        ✉ {member.email}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Review Committee */}
                <div className="">
                    <div className="text-center mb-10 relative">
                        <h3 className="text-2xl font-bold text-primary inline-block bg-white px-4 relative z-10">
                            TECHNICAL COMMITTEE
                        </h3>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-0"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {technicalCommittee.map((member, i) => (
                            <div key={i} className="flex flex-col border-l-4 border-secondary/20 pl-5 hover:border-secondary transition-all group">
                                <span className="font-bold text-lg text-primary group-hover:text-secondary transition-colors mb-1">{member.name}</span>
                                {member.role && <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{member.role}</span>}
                                <span className="text-sm text-gray-700 font-medium leading-snug mb-2">{member.aff}</span>
                                {member.email && (
                                    <span className="text-xs text-blue-600 mt-auto flex items-center gap-1">
                                        ✉ {member.email}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
