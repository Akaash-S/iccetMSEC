import { User } from "lucide-react";

const committee = [
    {
        role: "Chief Patrons",
        members: [
            { name: "Dr. K. S. Lakshmi", title: "Correspondent, MSEC" },
            { name: "Prof. N. Sreekanth", title: "Secretary, MSEC" },
            { name: "Prof. U. Deepa", title: "Director, MSEC" }
        ]
    },
    {
        role: "Patrons",
        members: [
            { name: "Dr. S. V. Saravanan", title: "Principal, MSEC" },
            { name: "Dr. Poongothai", title: "Dean-Research, MSEC" }
        ]
    },
    {
        role: "Conference Chair",
        members: [
            { name: "Dr. R. Arivazhagan", title: "Head-Research, MSEC", contact: "9003116690" }
        ]
    },
    {
        role: "Conference Co-Chairs",
        members: [
            { name: "Dr. V.J. Arul Karthick", title: "Dean-IQAC, MSEC" },
            { name: "Dr. S.B. Sivasubramaniyan", title: "AP, EEE, MSEC" },
            { name: "Mr. Mohan Raj Vijayan", title: "AP, IT, MSEC", contact: "7358058584" }
        ]
    },
    {
        role: "Advisory Committee",
        isSimpleList: true,
        members: [
            { name: "Prof. P.S. Neelakanta", title: "Florida Atlantic University, USA" },
            { name: "Dr. Yu Kok Hwa", title: "Universiti Sains Malaysia, Malaysia" },
            { name: "Dr. Michael Benedikt", title: "University of Oxford, UK" },
            { name: "Dr. D. Ranjith Kumar", title: "Silesian University of Technology (SUT), Poland" },
            { name: "Dr. Sylvain Schmitz", title: "Université Paris Cité, France" },
            { name: "Dr. Hans Van Ditmarsch", title: "University of Toulouse, France" },
        ]
    },
    {
        role: "Technical Committee",
        isSimpleList: true,
        members: [
            { name: "Dr. Sujata Mandal", title: "CSIR - CLRI, Chennai" },
            { name: "Dr. V. JothiPrakash", title: "IIT Bombay" },
            { name: "Dr. S. Sridhar", title: "Anna University" },
        ]
    }
];

export default function ProgramCommitteePage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Committee</h1>
                    <p className="text-gray-500">The leadership team behind ICTAGI 2026</p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="space-y-12">
                    {committee.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-dark text-white py-4 px-6">
                                <h2 className="text-xl font-bold tracking-wide uppercase">{section.role}</h2>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {section.members.map((member, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 border border-gray-50 rounded-lg bg-gray-50/50">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                                <p className="text-primary font-medium text-sm">{member.title}</p>
                                                {member.contact && (
                                                    <p className="text-xs text-gray-500 mt-1">Contact: {member.contact}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
