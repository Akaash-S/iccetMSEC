"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        q: "What is the procedure for absence?",
        a: "If an author cannot attend, they must inform the committee in advance. Virtual presentation options are available for hybrid conferences."
    },
    {
        q: "Can you explain the registration categories?",
        a: "We have categories for Authors (Presenters), Listeners (Attendees), and Students/Research Scholars vs. Industry/Faculty. Please check the registration details for specific fees."
    },
    {
        q: "Why is there a pricing difference (2950 INR vs 2200 INR)?",
        a: "The difference typically accounts for the type of participant (e.g., Industry/Academic vs. Student) or early bird vs. standard registration."
    },
    {
        q: "Who is considered a Registered Author?",
        a: "A Registered Author is one who has completed the registration form and paid the full conference fee. Only registered papers are included in the proceedings."
    },
    {
        q: "What is the presentation timing?",
        a: "Each presentation is allotted 12 minutes for the talk followed by 3 minutes for Q&A."
    },
    {
        q: "What materials start required for the conference?",
        a: "You should bring your College ID card and your presentation on a pen drive. It is also recommended to keep a backup on email/cloud."
    },
    {
        q: "What is the required paper format?",
        a: "Papers must be formatted according to the IEEE or IJSIET template. Templates are available for download on the submission page."
    },
    {
        q: "Is publication guaranteed?",
        a: "Publication is subject to peer review and acceptance. All registered papers that meet the quality standards will be published."
    },
    {
        q: "How can I be eligible for the ₹20,000 Cash Award?",
        a: "The cash award is given for the 'Excellent Paper'. The selection is based on the quality of research, presentation, and reviewer scores."
    },
    {
        q: "Is there a specific dress code?",
        a: "Formal or smart casual attire is recommended for the conference."
    },
    {
        q: "Will I get a participation certificate?",
        a: "Yes, all registered participants (authors and listeners) will receive a certificate."
    },
    {
        q: "Can I publish in Scopus/WoS journals?",
        a: "Yes, we offer publication options in Scopus, Web of Science, SCI, and ESCIE indexed journals for an additional fee."
    },
    {
        q: "Who do I contact for help?",
        a: "You can reach us at iccet2026@gmail.com or call +91 96000 34378."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Frequently Asked Questions</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-3xl">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden glass-card">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="font-bold text-gray-800 pr-4">{faq.q}</span>
                                {openIndex === index ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 bg-white border-t border-gray-100 text-gray-600">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
