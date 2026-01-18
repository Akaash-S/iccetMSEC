import { 
    Cpu, 
    Database, 
    Stethoscope, 
    Zap, 
    Building2, 
    Factory, 
    ShieldAlert, 
    Sparkles, 
    ScrollText, 
    Scale 
} from "lucide-react";

const topics = [
    {
        category: "1. Foundations of Artificial Intelligence, Computational Logic, and Intelligent Systems",
        icon: Cpu,
        items: [
            "Computational Logic, Algorithms, and Mathematical Foundations of AI",
            "Neuro-Symbolic AI and Knowledge Representation",
            "Machine Learning, Deep Learning, and Soft Computing",
            "Explainable, Trustworthy, and Secure AI",
            "High-Performance, Distributed, and Edge AI Systems"
        ]
    },
    {
        category: "2. AI for Data Science, Big Data Analytics, and Decision Intelligence",
        icon: Database,
        items: [
            "Data Mining and Knowledge Discovery",
            "Big Data Analytics and Intelligent Decision Systems",
            "Information Retrieval and Recommendation Systems",
            "Business Analytics and Management Information Systems",
            "AI for Policy and Strategic Decision Support"
        ]
    },
    {
        category: "3. AI in Medicine, Healthcare, and Life Sciences",
        icon: Stethoscope,
        items: [
            "AI for Medical Imaging and Diagnostics",
            "Predictive Healthcare and Disease Analytics",
            "AI in Drug Discovery, Genomics, and Bioinformatics",
            "Smart Wearables, IoT, and Digital Health",
            "Ethical and Explainable AI in Healthcare"
        ]
    },
    {
        category: "4. AI for Sustainable Energy, Power Systems, and Smart Grids",
        icon: Zap,
        items: [
            "Smart Grids and Cognitive Energy Networks",
            "AI for Renewable Energy Integration",
            "Digital Twins for Power and Energy Infrastructure",
            "Reinforcement Learning for Energy Optimization",
            "Explainable AI for Safety-Critical Energy Systems"
        ]
    },
    {
        category: "5. AI for Smart Cities, Civil Infrastructure, and Climate Resilience",
        icon: Building2,
        items: [
            "Structural Health Monitoring and Intelligent Infrastructure",
            "Smart Transportation and Traffic Optimization",
            "Flood, Landslide, and Disaster Prediction",
            "AI for Climate Modeling and Environmental Monitoring",
            "Sustainable and Resilient Urban Systems"
        ]
    },
    {
        category: "6. AI for Advanced Manufacturing, Materials, and Industrial Sustainability",
        icon: Factory,
        items: [
            "AI-Driven Design Optimization and Digital Manufacturing",
            "Predictive Maintenance and Industrial Analytics",
            "AI in Composite Materials, Nanotechnology, and Applied Physics",
            "Robotics, Automation, and Computer Vision in Industry",
            "Net-Zero and Energy-Efficient Industrial Systems"
        ]
    },
    {
        category: "7. AI for Defence, Cybersecurity, and Strategic Resilience",
        icon: ShieldAlert,
        items: [
            "AI for Surveillance, Reconnaissance, and Threat Detection",
            "Cybersecurity, Cyber Defence, and Information Warfare",
            "Autonomous and Semi-Autonomous Defence Systems",
            "Decision Support Systems and Defence Digital Twins",
            "Dual-Use AI for Defence, Disaster Response, and Public Safety"
        ]
    },
    {
        category: "8. Generative AI, Human–AI Collaboration, and Creative Intelligence",
        icon: Sparkles,
        items: [
            "Generative AI Models and Multimodal Systems",
            "AI for Creativity, Design, and Digital Media",
            "AI in Personalized Education and Intelligent Tutoring",
            "Human–AI Interaction and Collaborative Intelligence",
            "Responsible and Ethical Generative AI"
        ]
    },
    {
        category: "9. AI, Indian Knowledge Systems (IKS), and Indigenous Intelligence",
        icon: ScrollText,
        items: [
            "AI-Based Modeling of Indian Knowledge Systems",
            "Computational Logic Inspired by Indian Philosophy",
            "AI in Ayurveda, Yoga, and Traditional Healthcare",
            "Ethical AI Frameworks from IKS Perspectives",
            "Preservation and Digitization of Indigenous Knowledge"
        ]
    },
    {
        category: "10. AI for Humanities, Society, Ethics, and Global Good",
        icon: Scale,
        items: [
            "Ethical, Responsible, and Human-Centric AI",
            "AI for Governance, Public Policy, and Social Equity",
            "AI in Language, Culture, and Digital Humanities",
            "AI for Sustainable Development Goals (SDGs)",
            "Global AI Governance, Law, and Societal Impact"
        ]
    }
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
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {topics.map((topic) => (
                        <div key={topic.category} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <topic.icon size={24} />
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 leading-tight pt-1">{topic.category}</h2>
                            </div>

                            <ul className="space-y-3">
                                {topic.items.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700 px-3 py-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                        <span className="leading-relaxed">{item}</span>
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
