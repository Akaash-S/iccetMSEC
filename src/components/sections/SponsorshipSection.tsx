"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Star, Award, Gift } from "lucide-react";

const sponsors = [
    {
        id: "platinum",
        title: "Platinum Sponsor",
        price: "Rs. 2,00,000 / USD 3000",
        benefits: [
            "Company logo on all conference materials (Banners, Website, Brochure)",
            "3 Complimentary registrations",
            "Speaking opportunity in the plenary session (10 mins)",
            "Exhibition stall (3x3 m) at a prime location",
            "Special recognition during the inauguration and valedictory functions"
        ],
        icon: Star
    },
    {
        id: "gold",
        title: "Gold Sponsor",
        price: "Rs. 1,00,000 / USD 1500",
        benefits: [
            "Company logo on website and brochure",
            "2 Complimentary registrations",
            "Exhibition stall (2x2 m)",
            "Recognition during the conference"
        ],
        icon: Award
    },
    {
        id: "silver",
        title: "Silver Sponsor",
        price: "Rs. 50,000 / USD 750",
        benefits: [
            "Company logo on website",
            "1 Complimentary registration",
            "Display of banner at the venue"
        ],
        icon: Award
    },
    {
        id: "bronze",
        title: "Bronze Sponsor",
        price: "Rs. 25,000 / USD 400",
        benefits: [
            "Company logo on website",
            "Mention in the conference proceedings"
        ],
        icon: Award
    },
    {
        id: "exhibition",
        title: "FOR EXHIBITION OPPORTUNITIES",
        price: "Contact Us",
        benefits: [
            "Stall space for product display",
            "Interaction with delegates and students",
            "Networking opportunities"
        ],
        icon: Gift
    }
];

export function SponsorshipSection() {
    const [openId, setOpenId] = useState<string | null>("platinum");

    return (
        <section className="py-20 bg-gray-50" id="sponsorship">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 font-heading">
                        SPONSORSHIP
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {sponsors.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                            <button
                                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                                className={`
                                    w-full flex items-center justify-between p-5 text-left transition-colors
                                    ${openId === item.id ? "bg-primary text-white" : "bg-white text-primary hover:bg-gray-50"}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon size={20} className={openId === item.id ? "text-secondary" : "text-primary"} />
                                    <span className="text-xl font-bold">{item.title}</span>
                                </div>
                                {openId === item.id ? <Minus size={24} /> : <Plus size={24} />}
                            </button>

                            <AnimatePresence>
                                {openId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                                            <div className="mb-4">
                                                <span className="text-2xl font-bold text-accent">{item.price}</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {item.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                        <span className="w-1.5 h-1.5 mt-2 bg-secondary rounded-full shrink-0"></span>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
