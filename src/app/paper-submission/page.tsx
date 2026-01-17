import { CheckCircle, Download, FileText, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function PaperSubmissionPage() {
    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Paper Submission</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-5xl">

                {/* Process Steps */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-center text-dark mb-10">Submission Process</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center z-10">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                            <h3 className="font-bold mb-2">Submit Paper</h3>
                            <p className="text-sm text-gray-500">Send your paper to <br /><a href="mailto:iccet2026@gmail.com" className="text-primary font-medium">iccet2026@gmail.com</a></p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center z-10">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                            <h3 className="font-bold mb-2">Wait for Acceptance</h3>
                            <p className="text-sm text-gray-500">Receive acceptance email with a <strong>Unique ID</strong> within 12 hours.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center z-10">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                            <h3 className="font-bold mb-2">Register</h3>
                            <p className="text-sm text-gray-500">Fill the registration form and complete the payment.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm text-center z-10">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                            <h3 className="font-bold mb-2">Final Step</h3>
                            <p className="text-sm text-gray-500">Receive final acknowledgment from the committee.</p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12" id="templates">
                    {/* Submission Guidelines */}
                    <div>
                        <h2 className="text-2xl font-bold text-dark mb-6">Downloads & Templates</h2>
                        <div className="prose text-gray-600 space-y-4 mb-6">
                            <p>
                                Please ensure your paper follows one of the approved formats.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a href="#" className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">IEEE Format Template</h3>
                                    <p className="text-xs text-gray-500">Download .doc file</p>
                                </div>
                                <Download className="ml-auto text-gray-400 group-hover:text-primary" size={20} />
                            </a>

                            <a href="#" className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">IJSIET Template</h3>
                                    <p className="text-xs text-gray-500">Download .docm file</p>
                                </div>
                                <Download className="ml-auto text-gray-400 group-hover:text-primary" size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Submission Actions */}
                    <div className="bg-gray-50 p-8 rounded-2xl h-fit sticky top-24">
                        <h2 className="text-2xl font-bold text-dark mb-6">Proceed to Registration</h2>
                        <p className="text-gray-600 mb-8">
                            Once you have your Unique ID, please proceed to the registration page.
                        </p>

                        <Link
                            href="/registration"
                            className="block w-full py-4 bg-primary text-white text-center font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-all hover:-translate-y-1"
                        >
                            Go to Registration Form
                        </Link>

                        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-800">
                            <strong>Step 1 Reminder:</strong> Have you emailed your paper to <a href="mailto:iccet2026@gmail.com" className="underline font-bold">iccet2026@gmail.com</a> first?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
