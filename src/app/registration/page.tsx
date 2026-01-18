"use client";

import { useForm } from "react-hook-form";
import { CheckCircle, Download, Upload, CreditCard } from "lucide-react";

const fees = [
    { category: "Research Scholars / PG Students", inr: "₹3,000", usd: "$30" },
    { category: "Faculty / Academicians", inr: "₹5,000", usd: "$50" },
    { category: "Industry Delegates", inr: "₹10,000", usd: "$100" },
    { category: "Listener / Attendee", inr: "₹1,000", usd: "$10" },
];

export default function RegistrationPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        alert("Thank you for your interest! Official registration payment gateway will open shortly. We will notify you via email.");
    };

    return (
        <div className="pt-10 pb-20 bg-gray-50 min-h-screen">
            <header className="bg-primary/5 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Registration Portal</h1>
                    <p className="text-gray-600 text-lg">Secure your participation at ICTAGI 2026</p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </div>
            </header>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column: Fees & Bank Details */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Fees Section */}
                        <div id="fees" className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-dark text-white p-6 flex justify-between items-center">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <CreditCard size={20} className="text-primary" />
                                    Registration Fees
                                </h2>
                            </div>
                            <div className="p-1">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="p-4 border-b text-gray-700 font-semibold text-sm uppercase tracking-wider">Category</th>
                                            <th className="p-4 border-b text-gray-700 font-semibold text-sm uppercase tracking-wider">Indian Authors</th>
                                            <th className="p-4 border-b text-gray-700 font-semibold text-sm uppercase tracking-wider">Foreign Authors</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {fees.map((fee, i) => (
                                            <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                                                <td className="p-4 font-medium text-gray-800">{fee.category}</td>
                                                <td className="p-4 text-primary font-bold">{fee.inr}</td>
                                                <td className="p-4 text-gray-600 font-bold">{fee.usd}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-yellow-50 p-4 text-sm text-yellow-800 border-t border-yellow-100">
                                * Registration fee includes conference kit, lunch, and refreshments. Accommodation is not included.
                            </div>
                        </div>

                        {/* Bank Details */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-xl font-bold text-dark mb-1">Payment Information</h2>
                                <p className="text-gray-500 text-sm">Please make payments via NEFT/IMPS/UPI to the following account</p>
                            </div>
                            <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                        <span className="text-gray-500 text-sm">Account Name</span>
                                        <span className="font-bold text-dark">ICTAGI Conference</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                        <span className="text-gray-500 text-sm">Account Number</span>
                                        <span className="font-bold text-dark">1234 5678 9012</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                        <span className="text-gray-500 text-sm">Bank Name</span>
                                        <span className="font-bold text-dark">Indian Bank</span>
                                    </div>
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                                        <span className="text-gray-500 text-sm">IFSC Code</span>
                                        <span className="font-bold text-dark">IDIB000M123</span>
                                    </div>
                                    <div className="flex justify-between pt-2">
                                        <span className="text-gray-500 text-sm">Branch</span>
                                        <span className="font-bold text-dark">Kodambakkam, Chennai</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-200">
                                    <div className="w-40 h-40 bg-white shadow-inner flex items-center justify-center mb-4">
                                        {/* Placeholder for QR Code */}
                                        <span className="text-gray-400 text-xs text-center p-2">QR Code Placeholder<br />(See Brochure)</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Scan to Pay</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Registration Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-dark mb-6">Registration Form</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input {...register("name")} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Dr./Mr./Ms." />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input {...register("email")} type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input {...register("phone")} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Institution / Organization</label>
                                    <input {...register("institution")} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="University / Company" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                                    <input {...register("designation")} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Professor / Student / Manager" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Paper ID (if applicable)</label>
                                    <input {...register("paperId")} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="e.g., PID-123" />
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                                        Submit Registration
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    By submitting, you agree to our terms and conditions.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
