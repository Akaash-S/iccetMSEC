"use client";

import { Calendar, CheckCircle, Clock, FileText, UserCheck, AlertCircle } from "lucide-react";

export function PublicationsSection() {
    return (
        <section className="py-20 bg-gray-50 bg-opacity-50" id="publications">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 font-heading">
                        PUBLICATIONS & REGISTRATION
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 border-b pb-2">Publication Policy</h3>
                        <div className="text-center py-4 text-gray-700">
                            All accepted papers will be published in <span className="font-bold text-primary">Springer Journal</span>.
                        </div>
                    </div>
                </div>

                {/* Registration Fees & Bank Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Fees List */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                            REGISTRATION FEES
                        </h3>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent">
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-gray-700 font-medium">Research Scholars / PG Students</span>
                                    <span className="font-bold text-primary">₹3000 / $30</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-gray-700 font-medium">Faculty</span>
                                    <span className="font-bold text-primary">₹5000 / $50</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                    <span className="text-gray-700 font-medium">Industry</span>
                                    <span className="font-bold text-primary">₹10,000 / $100</span>
                                </li>
                                <li className="flex justify-between items-center pb-2">
                                    <span className="text-gray-700 font-medium">Listener</span>
                                    <span className="font-bold text-primary">₹1000 / $10</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bank Details Table */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">
                            ACCOUNT DETAILS
                        </h3>
                        <div className="overflow-hidden rounded-xl shadow-md border border-gray-200">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-white uppercase bg-primary">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 font-bold border-r border-white/10">Field</th>
                                        <th scope="col" className="px-6 py-4 font-bold">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-bold text-primary border-r">Account Name</td>
                                        <td className="px-6 py-4 text-gray-700">MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE - INTERNATIONAL CONFERENCE - 2026</td>
                                    </tr>
                                    <tr className="bg-gray-50 border-b hover:bg-gray-100">
                                        <td className="px-6 py-4 font-bold text-primary border-r">Account Number</td>
                                        <td className="px-6 py-4 text-gray-700 font-mono">30479154634</td>
                                    </tr>
                                    <tr className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-bold text-primary border-r">IFSC Code</td>
                                        <td className="px-6 py-4 text-gray-700 font-mono">SBIN0001444</td>
                                    </tr>
                                    <tr className="bg-gray-50 hover:bg-gray-100">
                                        <td className="px-6 py-4 font-bold text-primary border-r">Bank Name</td>
                                        <td className="px-6 py-4 text-gray-700">STATE BANK OF INDIA - KODAMBAKKAM BRANCH - CHENNAI 600024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Important Dates */}
                <div id="dates">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-primary inline-block bg-white px-4 relative z-10 border border-gray-100 rounded-full py-2 shadow-sm">
                            IMPORTANT DATES
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {[
                            { label: "Abstract Submission", date: "28 February 2026", color: "border-blue-500" },
                            { label: "Paper Submission", date: "31 March 2026", color: "border-indigo-500" },
                            { label: "Acceptance Notification", date: "15 May 2026", color: "border-purple-500" },
                            { label: "Registration & Camera Ready", date: "31 May 2026", color: "border-green-500" },
                            { label: "Conference Date", date: "12 August 2026", color: "border-accent", highlight: true },
                        ].map((item, index) => (
                            <div key={index} className={`bg-white p-4 rounded-lg shadow-md border-t-4 ${item.color} hover:-translate-y-1 transition-transform ${item.highlight ? 'ring-2 ring-accent/20' : ''}`}>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-2 h-8 flex items-center">{item.label}</p>
                                <p className="text-lg font-bold text-dark">{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
