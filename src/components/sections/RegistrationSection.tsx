"use client";

import { ArrowRight, Upload, FileText, CheckCircle, Mail } from "lucide-react";

export function RegistrationSection() {
    return (
        <section className="py-20 bg-gray-50" id="registration">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 font-heading">
                        PAPER SUBMISSION &amp; REGISTRATION
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-gray-700 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                        Submit your paper and complete your registration in one step using the form below.
                        The registration fee includes conference materials, lunch, and refreshment.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12 space-y-10">

                        {/* Submission Guidelines */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-primary border-l-4 border-accent pl-3">
                                Submission Guidelines
                            </h3>
                            <div className="space-y-5">
                                <div className="flex gap-4">
                                    <div className="mt-1 bg-gray-100 p-2 rounded-full shrink-0">
                                        <FileText className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary mb-1">Final Data Submission</h4>
                                        <p className="text-gray-600">Soft copies of the final paper should be submitted in full as per the conference schedule.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1 bg-gray-100 p-2 rounded-full shrink-0">
                                        <Upload className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary mb-1">File Format</h4>
                                        <p className="text-gray-600">Papers must be submitted in PDF or Word format.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1 bg-gray-100 p-2 rounded-full shrink-0">
                                        <CheckCircle className="text-primary w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary mb-1">Online Participation</h4>
                                        <p className="text-gray-600">The conditions for online participation will be noted on the website.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Registration Categories */}
                        <div>
                            <h3 className="text-xl font-bold text-primary border-l-4 border-accent pl-3 mb-5">
                                Registration Categories
                            </h3>
                            <ul className="space-y-4 max-w-lg">
                                <li className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">1</span>
                                    <span className="text-gray-800 font-medium">Presentation only</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">2</span>
                                    <span className="text-gray-800 font-bold">Presentation and Scopus Publication</span>
                                </li>
                            </ul>
                        </div>

                        {/* Review Policy */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
                            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-accent rounded-sm shrink-0"></span>
                                Paper Submission &amp; Review Policy
                            </h3>
                            <div className="text-gray-700 space-y-3 leading-relaxed">
                                <p>All accepted papers will be published in Scopus Proceedings / Scopus Indexed Journals.</p>
                                <p>
                                    At least one author must register for each accepted paper to be published.
                                    Papers will undergo a plagiarism check, and those with similarity above the acceptable limit will be rejected initially.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-100">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdUiQ3npHVS8Y-xkYun-3plF8Q77k7o7t57SkR09kiyWz8ppQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-all hover:scale-105 transform"
                            >
                                Register &amp; Submit Paper <ArrowRight size={18} />
                            </a>
                            <a href="mailto:ictagi@msec.edu.in" className="flex items-center gap-2 text-accent font-medium hover:underline">
                                <Mail size={18} />
                                ictagi@msec.edu.in
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
