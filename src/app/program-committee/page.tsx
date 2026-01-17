const committee = [
    {
        role: "Patron-in-Chief",
        members: [
            { name: "Thiru. Dr. K. Vasudevan", title: "Chairman, Prince Group of Institutions" },
            { name: "Thiru. Dr. V. VishnuKarthik", title: "Vice-Chairman, Prince Group of Institutions" }
        ]
    },
    {
        role: "Conference Chair",
        members: [
            { name: "Dr. Mahalakshmi", title: "Dean, PSVPEC" },
            { name: "Dr. G. Indira", title: "Principal, PSVPEC" }
        ]
    },
    {
        role: "Co-Conference Chair",
        members: [
            { name: "Representatives", title: "Samarkand State University, Uzbekistan" }
        ]
    },
    {
        role: "International Speakers",
        members: [
            { name: "Speaker Representatives", title: "Oman" },
            { name: "Speaker Representatives", title: "Uzbekistan" }
        ]
    },
    {
        role: "Advisory Committee",
        isSimpleList: true,
        members: [
            { name: "150+ Professors & Experts", title: "USA, India, Malaysia, Botswana, UAE, etc." },
            // Add more specific names if provided later
        ]
    }
];

export default function ProgramCommitteePage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Program Committee</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-12">
                    {committee.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-dark text-white py-4 px-6">
                                <h2 className="text-xl font-bold tracking-wide uppercase">{section.role}</h2>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="grid gap-6">
                                    {section.members.map((member, idx) => (
                                        <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-50 last:border-0 pb-4 last:pb-0">
                                            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                                            <p className="text-primary font-medium">{member.title}</p>
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
