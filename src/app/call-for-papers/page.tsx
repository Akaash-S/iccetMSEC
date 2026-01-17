import { Cpu, Server, Wrench, Zap, Microscope, Activity, Beaker, Building, Radio, Globe, HeartPulse, Leaf, ShieldCheck, Factory } from "lucide-react";

const topics = [
    {
        category: "AI for Sustainable Development Goals",
        icon: Globe,
        items: [
            "AI in Environmental Sustainability", "Climate Change Analysis", "Green Computing", "Smart Agriculture"
        ]
    },
    {
        category: "Ethics & Responsible AI",
        icon: ShieldCheck,
        items: [
            "Bias in AI", "Explainable AI (XAI)", "AI Governance", "Privacy Preserving AI"
        ]
    },
    {
        category: "AI in Healthcare",
        icon: HeartPulse,
        items: [
            "Medical Imaging", "Predictive Analytics", "Drug Discovery", "Telemedicine", "Personalized Medicine"
        ]
    },
    {
        category: "AI in Sustainable Energy",
        icon: Leaf,
        items: [
            "Smart Grids", "Energy Optimization", "Renewable Energy Forecasting", "Battery Management"
        ]
    },
    {
        category: "Intelligent Manufacturing & Industry 5.0",
        icon: Factory,
        items: [
            "Predictive Maintenance", "Cobots", "Digital Twins", "Supply Chain Optimization", "Smart Cities"
        ]
    },
    {
        category: "Frontiers of AI Research",
        icon: Cpu,
        items: [
            "Generative AI", "Neuromorphic Computing", "Quantum AI", "Reinforcement Learning"
        ]
    },
];

export default function CallForPapersPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Call For Papers</h1>
                    <p className="text-gray-600 text-lg">Tracks regarding Transformative AI for Global Impact</p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic) => (
                        <div key={topic.category} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <topic.icon size={24} />
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 leading-tight">{topic.category}</h2>
                            </div>

                            <ul className="space-y-2">
                                {topic.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 px-2 py-1 bg-gray-50 rounded-md">
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
