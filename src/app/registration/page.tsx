"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Download, Upload, CreditCard } from "lucide-react";

const fees = [
    { category: "Research Scholars / PG Students", inr: "₹3,000", usd: "$30" },
    { category: "Faculty / Academicians", inr: "₹5,000", usd: "$50" },
    { category: "Industry Delegates", inr: "₹10,000", usd: "$100" },
    { category: "Listener / Attendee", inr: "₹1,000", usd: "$10" },
];

export default function RegistrationPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Watch the file input to show selected filename
    const watchedFile = watch("file");

    // TODO: Replace this with your actual Web App URL after deploying the Apps Script
    // TODO: Replace this with your actual Web App URL after deploying the Apps Script
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

    // Helper to convert file to Base64
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            let fileData = null;

            // Check if a file is selected (react-hook-form returns a FileList)
            if (data.file && data.file.length > 0) {
                const file = data.file[0];
                const base64 = await fileToBase64(file);
                fileData = {
                    name: file.name,
                    type: file.type,
                    base64: base64
                };
            }

            // Prepare payload
            const payload = {
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                institution: data.institution,
                country: data.country,
                category: data.category,
                presentationType: data.presentationType,
                paperId: data.paperId || "",
                file: fileData
            };

            // Send to Google Apps Script
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(payload),
            });

            alert("Registration Submitted Successfully! saved to Database.");

        } catch (error) {
            console.error("Submission Error:", error);
            alert("Error submitting form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 sticky top-24">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-dark text-center w-full">Conference Registration</h3>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div>
                                    <input
                                        {...register("name", { required: "Full name is required" })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400`}
                                        placeholder="Full Name *"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>}
                                </div>

                                <div>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                                        })}
                                        type="email"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400`}
                                        placeholder="Email *"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{String(errors.email.message)}</p>}
                                </div>

                                <div>
                                    <input
                                        {...register("mobile", { required: "Mobile number is required" })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400`}
                                        placeholder="Mobile Number *"
                                    />
                                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{String(errors.mobile.message)}</p>}
                                </div>

                                <div>
                                    <input
                                        {...register("institution", { required: "Institution is required" })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.institution ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400`}
                                        placeholder="Institution/Organization *"
                                    />
                                    {errors.institution && <p className="text-red-500 text-xs mt-1">{String(errors.institution.message)}</p>}
                                </div>

                                <div>
                                    <input
                                        {...register("country", { required: "Country is required" })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400`}
                                        placeholder="Country *"
                                    />
                                    {errors.country && <p className="text-red-500 text-xs mt-1">{String(errors.country.message)}</p>}
                                </div>

                                <div>
                                    <select
                                        {...register("category", { required: "Category is required" })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 bg-white`}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>-- Select Category * --</option>
                                        <option value="student">Research Scholar / PG Student</option>
                                        <option value="faculty">Faculty / Academician</option>
                                        <option value="industry">Industry Delegate</option>
                                        <option value="listener">Listener</option>
                                    </select>
                                    {errors.category && <p className="text-red-500 text-xs mt-1">{String(errors.category.message)}</p>}
                                </div>

                                <div>
                                    <select
                                        {...register("presentationType", { required: "Presentation type is required" })}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.presentationType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 bg-white`}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>-- Select Presentation Type * --</option>
                                        <option value="oral">Oral Presentation</option>
                                        <option value="poster">Poster Presentation</option>
                                        <option value="attendee">Attendee Only</option>
                                    </select>
                                    {errors.presentationType && <p className="text-red-500 text-xs mt-1">{String(errors.presentationType.message)}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-dark mb-2">Attach File (PDF / DOC)</label>
                                    <div className={`flex items-center w-full px-3 py-2 rounded-lg border ${errors.file ? 'border-red-500' : 'border-gray-300'} bg-white`}>
                                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-md text-sm font-medium transition-colors border border-gray-300 mr-3">
                                            Choose File
                                            <input
                                                type="file"
                                                className="hidden"
                                                {...register("file", { required: "Please attach a file" })}
                                                accept=".pdf,.doc,.docx"
                                            />
                                        </label>
                                        <span className="text-gray-500 text-sm truncate">
                                            {watchedFile && watchedFile.length > 0 ? watchedFile[0].name : "No file chosen"}
                                        </span>
                                    </div>
                                    {errors.file && <p className="text-red-500 text-xs mt-1">{String(errors.file.message)}</p>}
                                </div>

                                <div className="pt-2">
                                    <button type="submit" className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-orange-100 text-lg">
                                        Submit Registration
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
