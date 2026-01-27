"use client";

import Link from "next/link";
import { Upload, FileText, CheckCircle, Mail } from "lucide-react";

export function PaperSubmissionSection() {
    return (
        <section className="py-20 bg-white" id="paper-submission">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary inline-block relative pb-2 font-heading">
                        PAPER SUBMISSIONS
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12 space-y-8">

                        {/* Guidelines List */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-gray-100 p-2 rounded-full">
                                    <FileText className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary mb-1">Final Data Submission</h3>
                                    <p className="text-gray-600">
                                        Soft copies of the final paper should be submitted in full as per the conference schedule.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-gray-100 p-2 rounded-full">
                                    <CheckCircle className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary mb-1">Online Participation</h3>
                                    <p className="text-gray-600">
                                        The conditions for online participation will be noted on the website.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-gray-100 p-2 rounded-full">
                                    <Upload className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary mb-1">File Format</h3>
                                    <p className="text-gray-600">
                                        Papers must be submitted in PDF or Word format.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col items-center gap-4 py-8 border-t border-b border-gray-100">
                            <Link
                                href="#"
                                className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 transform hover:scale-105"
                            >
                                Submit Here
                            </Link>
                            <a href="mailto:ictagi@msec.edu.in" className="flex items-center gap-2 text-accent font-medium hover:underline">
                                <Mail size={18} />
                                ictagi@msec.edu.in
                            </a>
                        </div>

                        {/* Policy Subsection */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
                            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-accent rounded-sm"></span>
                                Paper Submission & Review Policy
                            </h3>
                            <div className="text-gray-700 space-y-3 leading-relaxed">
                                <p>
                                    All accepted papers will be published in Scopus Indexed Journals / Proceedings.
                                </p>
                                <p>
                                    At least one author must register for each accepted paper to be published.
                                    Papers will undergo a plagiarism check, and those with similarity above the acceptable limit will be rejected initially.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
