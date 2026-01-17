import { Cpu, Server, Wrench, Zap, Microscope, Activity, Beaker, Building, Radio } from "lucide-react";

// Expanded topics list based on user request
const topics = [
    {
        category: "Computer Engineering & Recent Developments",
        icon: Cpu,
        items: [
            "Artificial Intelligence", "Machine Learning", "Cloud Computing", "Big Data Analytics",
            "Network Security", "Internet of Things (IoT)", "Blockchain Technology", "Software Engineering",
            "Cyber Security", "Data Mining", "Human Computer Interaction", "Virtual Reality / Augmented Reality",
            "Computer Networks", "Mobile Computing", "Natural Language Processing"
        ]
    },
    {
        category: "Electrical Engineering Trends",
        icon: Zap,
        items: [
            "Power Systems", "Renewable Energy Sources", "Smart Grids", "Power Electronics",
            "Control Systems", "Embedded Systems", "Electric Vehicles", "High Voltage Engineering",
            "Energy Storage", "Industrial Automation", "Instrumentation"
        ]
    },
    {
        category: "Mechanical Engineering Advances",
        icon: Wrench,
        items: [
            "Robotics & Automation", "Thermal Engineering", "Materials Science", "Fluid Mechanics",
            "CAD/CAM/CAE", "Mechatronics", "Manufacturing Technology", "Automobile Engineering",
            "Industrial Engineering", "Nano Technology in Mechanical"
        ]
    },
    {
        category: "Electronics & Communication",
        icon: Radio,
        items: [
            "VLSI Design", "Signal Processing", "Wireless Communication", "Optical Communication",
            "Antenna Design", "Satellite Communication", "Digital Image Processing", "Embedded Systems",
            "5G/6G Technology", "Sensor Networks"
        ]
    },
    {
        category: "Civil Engineering & Simulation",
        icon: Building,
        items: [
            "Structural Engineering", "Environmental Engineering", "Transportation Engineering", "Geotechnical Engineering",
            "Water Resources", "Construction Management", "Urban Planning", "Computer Simulation Softwares in Civil"
        ]
    },
    {
        category: "Chemical Engineering",
        icon: Beaker,
        items: [
            "Chemical Process Safety", "Petroleum Engineering", "Polymer Science", "Process Control",
            "Thermodynamics", "Separation Processes", "Bio-Chemical Engineering"
        ]
    },
    {
        category: "Biotechnology & Biomedical",
        icon: Microscope,
        items: [
            "Biomedical Instrumentation", "Medical Imaging", "Genetic Engineering", "Bioinformatics",
            "Nanobiotechnology", "Clinical Engineering", "Rehabilitation Engineering"
        ]
    }
];

export default function CallForPapersPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Call For Papers</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-gray-600 text-lg mb-6">
                        We invite original research papers on the following topics. The conference covers a wide range of engineering disciplines.
                    </p>
                    <div className="inline-block p-4 bg-orange-50 border border-orange-100 rounded-lg text-primary font-bold">
                        100+ Technical Topics across Multiple Disciplines
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {topics.map((topic) => (
                        <div key={topic.category} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 bg-orange-100 text-primary rounded-xl flex items-center justify-center">
                                    <topic.icon size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">{topic.category}</h2>
                            </div>

                            <ul className="grid grid-cols-1 gap-2">
                                {topic.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
