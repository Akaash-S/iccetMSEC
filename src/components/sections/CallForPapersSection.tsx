"use client";

import { motion } from "framer-motion";

const tracks = [
    {
        title: "Foundations of Artificial Intelligence and Intelligent Systems",
        topics: [
            "Computational Logic, Algorithms, and Mathematical Foundations of AI",
            "Neuro-Symbolic AI and Knowledge Representation",
            "Machine Learning, Deep Learning, and Soft Computing",
            "Explainable, Trustworthy, and Secure AI",
            "High-Performance, Distributed, and Edge AI Systems"
        ]
    },
    {
        title: "AI for Data Science, Big Data, and Decision Intelligence",
        topics: [
            "Data Mining and Knowledge Discovery",
            "Big Data Analytics and Intelligent Decision Systems",
            "Information Retrieval and Recommendation Systems",
            "Business Analytics and Management Information Systems",
            "AI for Policy and Strategic Decision Support"
        ]
    },
    {
        title: "AI in Medicine, Healthcare, and Life Sciences",
        topics: [
            "AI for Medical Imaging and Diagnostics",
            "Predictive Healthcare and Disease Analytics",
            "AI in Drug Discovery, Genomics, and Bioinformatics",
            "Smart Wearables, IoT, and Digital Health",
            "Ethical and Explainable AI in Healthcare"
        ]
    },
    {
        title: "AI for Sustainable Energy, Power Systems, and Smart Grids",
        topics: [
            "Smart Grids and Cognitive Energy Networks",
            "AI for Renewable Energy Integration",
            "Digital Twins for Power and Energy Infrastructure",
            "Reinforcement Learning for Energy Optimization",
            "Explainable AI for Safety-Critical Energy Systems"
        ]
    },
    {
        title: "AI for Smart Cities, Infrastructure, and Climate Resilience",
        topics: [
            "Structural Health Monitoring and Intelligent Infrastructure",
            "Smart Transportation and Traffic Optimization",
            "Disaster Prediction and Risk Mitigation",
            "AI for Climate Modeling and Environmental Monitoring",
            "Sustainable and Resilient Urban Systems"
        ]
    },
    {
        title: "AI for Advanced Manufacturing and Industrial Sustainability",
        topics: [
            "AI-Driven Design Optimization and Digital Manufacturing",
            "Predictive Maintenance and Industrial Analytics",
            "AI in Materials, Nanotechnology, and Applied Physics",
            "Robotics, Automation, and Computer Vision",
            "Net-Zero and Energy-Efficient Industrial Systems"
        ]
    },
    {
        title: "AI for Cybersecurity, Defence, and Strategic Resilience",
        topics: [
            "AI for Threat Detection and Surveillance",
            "Cybersecurity and Information Warfare",
            "Autonomous and Semi-Autonomous Systems",
            "Defence Decision Support and Digital Twins",
            "Dual-Use AI for Public Safety and Disaster Response"
        ]
    },
    {
        title: "Generative AI and Human–AI Collaboration",
        topics: [
            "Generative and Multimodal AI Models",
            "AI for Creativity, Design, and Digital Media",
            "Human–AI Interaction and Collaborative Intelligence",
            "Responsible and Ethical Generative AI"
        ]
    },
    {
        title: "AI, Indian Knowledge Systems (IKS), and Indigenous Intelligence",
        topics: [
            "AI-Based Modeling of Indian Knowledge Systems",
            "Computational Intelligence Inspired by Indian Philosophy",
            "AI in Ayurveda, Yoga, and Traditional Healthcare",
            "Ethical AI Frameworks from Indigenous Perspectives",
            "Digitization and Preservation of Indigenous Knowledge"
        ]
    },
    {
        title: "AI for Society, Ethics, Governance, and Global Good",
        topics: [
            "Ethical, Responsible, and Human-Centric AI",
            "AI for Governance, Public Policy, and Social Equity",
            "AI for Sustainable Development Goals (SDGs)",
            "Global AI Governance, Law, and Societal Impact"
        ]
    },
    {
        title: "AI for Environmental and Biodiversity Intelligence",
        topics: [
            "AI for Ecosystem Monitoring and Biodiversity Conservation",
            "Satellite, Drone, and Sensor-Based Environmental Intelligence",
            "AI for Pollution Detection and Sustainability",
            "Climate–Ecosystem Interaction Modeling",
            "AI for Wildlife Protection and Habitat Restoration"
        ]
    },
    {
        title: "AI for Agriculture, Food Security, and Sustainable Farming",
        topics: [
            "Precision Agriculture and Smart Farming",
            "AI for Crop Yield Prediction and Disease Detection",
            "Intelligent Irrigation and Resource Optimization",
            "AI for Food Supply Chains and Traceability",
            "Climate-Resilient and Sustainable Agri-Tech"
        ]
    },
    {
        title: "AI for Education, Learning Analytics, and Skill Development",
        topics: [
            "Intelligent Tutoring and Personalized Learning",
            "AI-Based Learning Analytics and Assessment",
            "Adaptive Curriculum Design",
            "AI for Lifelong Learning and Workforce Reskilling",
            "Ethical and Inclusive AI in Education"
        ]
    },
    {
        title: "AI for Financial Systems and Inclusive Economic Growth",
        topics: [
            "AI in Financial Risk Analysis and Fraud Detection",
            "Economic Forecasting and Market Intelligence",
            "AI for Digital Finance and Financial Inclusion",
            "Intelligent Credit Scoring and Microfinance",
            "Ethical AI in FinTech"
        ]
    },
    {
        title: "AI for Language, Multilingual Intelligence, and Communication",
        topics: [
            "Multilingual and Low-Resource Language Models",
            "Speech, Text, and Cross-Lingual Translation",
            "AI for Cultural and Language Preservation",
            "Language Technologies for Governance and Education",
            "Responsible and Inclusive Language AI"
        ]
    },
    {
        title: "AI for Public Health and Global Health Equity",
        topics: [
            "AI-Based Disease Surveillance and Early Warning",
            "Population Health Analytics and Policy Modeling",
            "AI for Healthcare Accessibility and Equity",
            "AI in Epidemic Preparedness and Response",
            "Ethical AI for Global Public Health"
        ]
    },
    {
        title: "AI for Human Augmentation and Assistive Technologies",
        topics: [
            "AI-Enabled Assistive and Rehabilitation Systems",
            "Human–AI Symbiosis and Cognitive Augmentation",
            "AI for Accessibility and Disability Inclusion",
            "Brain–Computer Interfaces and Intelligent Prosthetics",
            "Ethical and Responsible Human Augmentation"
        ]
    },
    {
        title: "AI for LegalTech, Blockchain, and Trusted Digital Governance",
        topics: [
            "AI for Legal Analytics and Contract Automation",
            "AI in Regulatory Compliance and Risk Management",
            "Blockchain and AI for Transparent Governance",
            "Smart Contracts and Decentralized Trust Systems",
            "Secure and Ethical AI for Legal Systems"
        ]
    },
    {
        title: "AI for Space Science and Satellite Intelligence",
        topics: [
            "Autonomous Spacecraft and Satellite Systems",
            "AI for Astronomical and Space Data Analysis",
            "Planetary Robotics and Surface Exploration",
            "Space Weather Prediction and Risk Analysis",
            "AI for Space Mission Planning and Sustainability"
        ]
    },
    {
        title: "AI for Quantum Computing and Quantum Intelligence",
        topics: [
            "Quantum Machine Learning and Hybrid Quantum–AI Models",
            "AI-Assisted Quantum Algorithm Design",
            "AI for Quantum Error Correction and Noise Mitigation",
            "Quantum-Inspired AI for Large-Scale Optimization",
            "AI-Driven Quantum Hardware Control"
        ]
    },
    {
        title: "AI for Management Studies and Business Transformation",
        topics: [
            "AI-Driven Strategic Planning and Decision Intelligence",
            "Generative AI for Marketing, Branding, and Customer Engagement",
            "AI for Human Resource Analytics, Talent Management, and Workforce Reskilling",
            "AI for Financial Intelligence, Risk Forecasting, and Fraud Detection",
            "AI for Operations, Supply Chain Optimization, and Entrepreneurial Growth"
        ]
    },
    {
        title: "Open Innovation",
        topics: [
            "Innovative AI Applications across Domains",
            "Cross-Disciplinary AI Research",
            "Emerging Trends and Future Technologies",
            "Student and Researcher Innovation Showcase"
        ]
    }
];

export function CallForPapersSection() {
    return (
        <section className="py-20 bg-gray-50 text-gray-900" id="call-for-papers">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark inline-block relative pb-2 font-heading">
                        CALL FOR PAPERS
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="mt-4 text-gray-600">Themes and Research Areas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {tracks.map((track, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm shrink-0 mt-1">
                                    {idx + 1}
                                </span>
                                <h3 className="text-lg font-bold text-primary leading-tight">
                                    {track.title}
                                </h3>
                            </div>

                            <ul className="space-y-2 ml-12">
                                {track.topics.map((subTopic, subIdx) => (
                                    <li key={subIdx} className="text-sm text-gray-700 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 mt-1.5 bg-gray-400 rounded-full shrink-0"></span>
                                        <span className="leading-relaxed">{subTopic}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
