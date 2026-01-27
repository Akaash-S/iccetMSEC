"use client";

import { motion } from "framer-motion";

const advisoryCommittee = [
    { name: "Prof. P.S. Neelakanta", aff: "Florida Atlantic University, USA" },
    { name: "Dr. Yu Kok Hwa", aff: "Universiti Sains Malaysia, Malaysia" },
    { name: "Dr. Michael Benedikt", aff: "University of Oxford, UK" },
    { name: "Dr. D. Ranjith Kumar", aff: "Silesian University of Technology (SUT), Poland" },
    { name: "Dr. M. Ramalakshmi", aff: "University of Technology and Applied Sciences, Muscat" },
    { name: "Dr. K. Shankar", aff: "Adama Science and Technology University, Ethiopia" },
    { name: "Dr. Sylvain Schmitz", aff: "Université Paris Cité, France" },
    { name: "Dr. Hans Van Ditmarsch", aff: "University of Toulouse, France" },
    { name: "Dr. Bala Dhadayuthabani", aff: "Shinas College of Technology, Sultanate of Oman" },
    { name: "Dr. S. Swamynathan", aff: "CEG, Anna University, Chennai, India" },
    { name: "Dr. Deepanraj Balakrishnan", aff: "Prince Mohammad Bin Fahd University, Saudi Arabia" },
    { name: "Dr. Navaneethan C. Arjuman", aff: "Multimedia University, Malaysia" },
    { name: "Prof. Anantha Chandrakasan", aff: "Massachusetts Institute of Technology, USA" },
    { name: "Prof. Samuel Paikowsky", aff: "Francis College of Engineering, USA" },
    { name: "Dr. Sophie Pinchinat", aff: "IRISA/INRIA Research laboratory" }
];

const technicalCommittee = [
    { name: "Dr. Sujata Mandal", aff: "CSIR - CLRI, Chennai, India" },
    { name: "Dr. V. JothiPrakash", aff: "Indian Institute of Technology Bombay, Mumbai, India" },
    { name: "Dr. S. Sridhar", aff: "Anna University, Chennai, India" },
    { name: "Dr. Ranjani Parthasarathi", aff: "Anna University, Chennai, (Retd.), India" },
    { name: "Dr. S. Anbuchelian", aff: "Anna University, Chennai, India" },
    { name: "Dr. Rajeswari Sridhar", aff: "National Institute of Technology, Trichy, India" },
    { name: "Dr. Kuzhathaivel", aff: "NITTTR, Chennai, India" },
    { name: "Dr. K. Senthilkumaran", aff: "IIITDM, Kancheepuram, India" },
    { name: "Dr. V. Ponnusamy", aff: "Madras Institute of Technology, Chennai, India" },
    { name: "Dr. Muthuraman", aff: "University of Madras, Guindy Campus, Chennai, India" },
    { name: "Dr. V. Meenakshisundaram", aff: "Meenakshi College for Women, Chennai, India" },
    { name: "Dr. K. Sridhar", aff: "SASTRA University, Thanjavur, India" },
    { name: "Dr. K.S. Ravichandran", aff: "Amritha University, Coimbatore, India" },
    { name: "Dr. Vijayendra Babu", aff: "Vellore Institute of Technology, Vellore, India" }
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advisoryCommittee.map((member, i) => (
                            <div key={i} className="flex flex-col border-l-2 border-accent/20 pl-4 hover:border-accent transition-colors">
                                <span className="font-bold text-primary">{member.name}</span>
                                <span className="text-sm text-gray-600">{member.aff}</span>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalCommittee.map((member, i) => (
                            <div key={i} className="flex flex-col border-l-2 border-secondary/20 pl-4 hover:border-secondary transition-colors">
                                <span className="font-bold text-primary">{member.name}</span>
                                <span className="text-sm text-gray-600">{member.aff}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
