"use client";

import { Mail, MapPin, Phone, Globe } from "lucide-react";

export default function ContactPage() {
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
                            For queries regarding paper submission, registration, or sponsorship.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="https://maps.app.goo.gl/K97irhc1SXbj2men6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group cursor-pointer"
                            >
                                <MapPin className="text-primary shrink-0 group-hover:animate-bounce" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">Venue</h3>
                                    <p className="text-gray-600 text-sm">
                                        Meenakshi Sundararajan Engineering College,<br />
                                        Chennai, India.
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Phone className="text-primary shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                                    <p className="text-gray-600 text-sm">+91 7358058584</p>
                                    <p className="text-gray-600 text-sm">+91 9003116690</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Mail className="text-primary shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                                    <a href="mailto:ictagi@msec.edu.in" className="text-gray-600 text-sm hover:text-primary transition-colors">ictagi@msec.edu.in</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100">
                                <Globe className="text-primary shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Website</h3>
                                    <a href="https://msec.edu.in/internationalconference.html" target="_blank" className="text-gray-600 text-sm hover:text-primary transition-colors">msec.edu.in/internationalconference.html</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-full min-h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.671379762484!2d80.2223833!3d13.0401763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5555555%3A0x6b77e3836791d798!2sMeenakshi%20Sundararajan%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
