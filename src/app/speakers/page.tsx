import { User } from "lucide-react";

const speakers = [
    {
        name: "Dr. Antony V. Samrot",
        title: "Professor",
        inst: "MAHSA University, Malaysia"
    },
    {
        name: "Dr. Sugapriya Dhanasekaran",
        title: "Professor",
        inst: "Manipal University Malaysia"
    },
    {
        name: "Jita Dash",
        title: "Engineering Manager",
        inst: "Microsoft, USA"
    },
    {
        name: "Prof. Dr. Chitra Venugopal",
        title: "Professor",
        inst: "Oregon Institute of Technology, USA"
    },
    {
        name: "Dr. Anteneh Mesfin Yeneneh",
        title: "Senior Lecturer",
        inst: "Curtin University, Australia"
    },
    // Placeholders for the "7 more distinguished speakers" mention
    { name: "Dr. Speaker Name 6", title: "Professor", inst: "International University" },
    { name: "Dr. Speaker Name 7", title: "Researcher", inst: "Global Institute of Tech" },
    { name: "Dr. Speaker Name 8", title: "Associate Professor", inst: "University of Science" },
    { name: "Dr. Speaker Name 9", title: "Dean", inst: "Engineering College, Europe" },
    { name: "Dr. Speaker Name 10", title: "Scientist", inst: "National Lab" },
    { name: "Dr. Speaker Name 11", title: "Head of Dept", inst: "Asian Tech Institute" },
    { name: "Dr. Speaker Name 12", title: "Director", inst: "Innovation Hub" },
];

export default function SpeakersPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Invited Speakers</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary/5 transition-colors">
                                <User size={64} />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-bold text-lg text-dark mb-2">{speaker.name}</h3>
                                <p className="text-primary text-sm font-semibold mb-2">{speaker.title}</p>
                                <p className="text-gray-500 text-xs">{speaker.inst}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
