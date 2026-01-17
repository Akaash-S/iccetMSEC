"use client";

import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";

const fees = [
    { category: "Research Scholars / PG Students", inr: "₹3000", usd: "$30" },
    { category: "Faculty", inr: "₹5000", usd: "$50" },
    { category: "Industry", inr: "₹10,000", usd: "$100" },
    { category: "Listener", inr: "₹1000", usd: "$10" },
];

export default function RegistrationPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        alert("Registration portal opening soon!");
    };

    return (
        <div className="pt-10 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Registration</h1>
                    <p className="text-gray-600">Secure your spot at ICTAGI 2026</p>
                </div>

                {/* Fee Table */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="bg-primary text-white p-4 text-center font-bold text-lg">
                        Registration Fees
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 border-b border-gray-200 text-gray-700">Category</th>
                                    <th className="p-4 border-b border-gray-200 text-gray-700">Indian Authors (INR)</th>
                                    <th className="p-4 border-b border-gray-200 text-gray-700">Foreign Authors (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fees.map((fee, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 border-b border-gray-100 font-medium text-gray-800">{fee.category}</td>
                                        <td className="p-4 border-b border-gray-100 text-primary font-bold">{fee.inr}</td>
                                        <td className="p-4 border-b border-gray-100 text-gray-600 font-bold">{fee.usd}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Placeholder Form */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-dark">Pre-Registration Interest</h2>
                        <p className="text-sm text-gray-500">Scan QR code in brochure or fill this form</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input {...register("name")} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none" />
                            <input {...register("email")} placeholder="Email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-dark text-white font-bold text-lg py-4 rounded-lg hover:bg-black transition-all"
                        >
                            Proceed to Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
