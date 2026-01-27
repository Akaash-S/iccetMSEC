"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-dark text-white border-t border-white/10" id="contact">
            {/* Main Contact Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12 text-gray-300">

                    {/* Left Column: Map */}
                    <div className="w-full lg:w-1/2 h-[400px] bg-gray-800 rounded-xl overflow-hidden relative shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0035676348633!2d80.23785461413516!3d12.924765618456247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c8c69136971%3A0x62804362a264a78b!2sKCG%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1614769000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        <div className="absolute bottom-4 left-4">
                            <a
                                href="https://goo.gl/maps/genericLink"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary text-xs font-bold rounded shadow hover:bg-gray-100 transition-colors"
                            >
                                <ExternalLink size={14} />
                                View larger map
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Campus Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-2 font-heading">
                            OUR CAMPUS
                        </h3>
                        <div className="h-1 w-20 bg-primary mb-8 rounded-full opacity-80"></div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-3 bg-white/5 rounded-full border border-white/10">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Address</h4>
                                    <p className="leading-relaxed">
                                        KCG College of Technology,<br />
                                        KCG Nagar, Rajiv Gandhi Salai,<br />
                                        Karapakkam, Chennai - 600 097,<br />
                                        Tamil Nadu, India.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-3 bg-white/5 rounded-full border border-white/10">
                                    <Mail className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                                    <a href="mailto:ictagi@msec.edu.in" className="text-gray-300 hover:text-white transition-colors block mb-1">
                                        ictagi@msec.edu.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-3 bg-white/5 rounded-full border border-white/10">
                                    <Phone className="text-secondary w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                                    <p className="text-gray-300">
                                        +91 7358058584<br />
                                        +91 9003116690
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-sm text-gray-500">
                                © 2026 KCG College of Technology. All rights reserved.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
