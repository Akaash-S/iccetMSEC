"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function RegistrationPage() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center flex-col text-center px-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                </div>
                <h1 className="text-3xl font-bold mb-2">Registration Successful!</h1>
                <p className="text-gray-600 max-w-md">
                    Thank you for registering for ICCET 2026. We have sent a confirmation email to your registered address.
                </p>
            </div>
        );
    }

    return (
        <div className="py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Registration</h1>
                    <p className="text-gray-600">Register for the 14th ICCET 2026 Conference</p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">First Name</label>
                                <input
                                    {...register("firstName", { required: true })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="John"
                                />
                                {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                <input
                                    {...register("lastName", { required: true })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Doe"
                                />
                                {errors.lastName && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <input
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="john.doe@university.edu"
                                type="email"
                            />
                            {errors.email && <span className="text-red-500 text-xs">Valid email is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Institution / Organization</label>
                            <input
                                {...register("institution", { required: true })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="University Name"
                            />
                            {errors.institution && <span className="text-red-500 text-xs">This field is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Designation</label>
                            <select
                                {...register("designation", { required: true })}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            >
                                <option value="">Select Designation</option>
                                <option value="student">Student (UG/PG)</option>
                                <option value="research_scholar">Research Scholar</option>
                                <option value="faculty">Faculty / Academician</option>
                                <option value="industry">Industry Professional</option>
                            </select>
                            {errors.designation && <span className="text-red-500 text-xs">This field is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Registration Type</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input type="radio" value="author" {...register("type")} className="mr-3 h-4 w-4 text-primary" />
                                    <div>
                                        <div className="font-semibold">Author</div>
                                        <div className="text-xs text-gray-500">Presenting a paper</div>
                                    </div>
                                </label>
                                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                    <input type="radio" value="listener" {...register("type")} className="mr-3 h-4 w-4 text-primary" />
                                    <div>
                                        <div className="font-semibold">Listener</div>
                                        <div className="text-xs text-gray-500">Attending only</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200"
                            >
                                Proceed to Payment
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-4">
                                By registering, you agree to the terms and conditions of ICCET 2026.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
