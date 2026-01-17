"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        alert("Message sent!");
    };

    return (
        <div className="pt-10 pb-20">
            <header className="bg-gray-100 py-16 mb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading text-dark mb-4">Contact Us</h1>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </header>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-dark">Get in Touch</h2>
                        <p className="text-gray-600">
                            Have questions about the conference? Reach out to us directly or visit our campus.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100">
                                <MapPin className="text-primary shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Venue</h3>
                                    <p className="text-gray-600 text-sm">
                                        Prince Shri Venkateshwara Padmavathy Engineering College,<br />
                                        Medavakkam – Mambakkam Road, Ponmar,<br />
                                        Chennai, Tamil Nadu – 600127, India.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Phone className="text-primary shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                                    <p className="text-gray-600 text-sm">9600034378</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Mail className="text-primary shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                                    <p className="text-gray-600 text-sm">iccet2026@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-dark mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                <input {...register("name")} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                <input type="email" {...register("email")} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                                <input {...register("subject")} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Inquiry about..." />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea {...register("message")} rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help?" />
                            </div>
                            <button type="submit" className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-16 h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg border border-gray-200">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.65866164284!2d80.17498!3d12.8655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52597400000001%3A0x6334657158752496!2sPrince%20Shri%20Venkateshwara%20Padmavathy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1650000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
