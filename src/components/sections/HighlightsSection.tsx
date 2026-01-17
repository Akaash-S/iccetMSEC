"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Quote } from "lucide-react";

const highlights = [
    {
        icon: Award,
        title: "Cash Prize",
        amount: "20,000 INR",
        description: "will be awarded for Excellent paper.",
        color: "text-amber-500",
        bg: "bg-amber-50",
        border: "border-amber-100",
    },
    {
        icon: BookOpen,
        title: "Proceedings",
        amount: "ISBN Number",
        description: "Proceedings will be published with ISBN Number.",
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        icon: Quote,
        title: "Publication",
        amount: "Multiple Options",
        description: "Scopus, Web of Science, SCI, ESCIE, Annexure 1 & 2.",
        color: "text-green-500",
        bg: "bg-green-50",
        border: "border-green-100",
        fullWidth: true,
    },
];

export function HighlightsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">
                        Conference Highlights
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`p-8 rounded-2xl border ${item.border} ${item.bg} shadow-sm hover:shadow-xl transition-all cursor-default flex flex-col items-center text-center`}
                        >
                            <div className={`p-4 rounded-full bg-white shadow-sm mb-6 ${item.color}`}>
                                <item.icon size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <div className={`text-2xl font-bold mb-3 ${item.color}`}>
                                {item.amount}
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
