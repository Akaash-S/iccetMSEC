import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-secondary">
                            14th ICCET 2026
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            International Conference on Contemporary Engineering and Technology.
                            Bringing together researchers and innovators from around the globe.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-sm font-semibold text-white">
                                Collaboration with:
                            </span>
                            <span className="text-sm text-gray-400">
                                Samarkand State University, Uzbekistan
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Conference
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/call-for-papers"
                                    className="hover:text-primary transition-colors"
                                >
                                    Call for Papers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/registration"
                                    className="hover:text-primary transition-colors"
                                >
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/paper-submission"
                                    className="hover:text-primary transition-colors"
                                >
                                    Submission Guidelines
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-primary" size={18} />
                                <span>
                                    Prince Shri Venkateshwara Padmavathy Engineering College, <br />
                                    Medavakkam – Mambakkam Road, <br />
                                    Ponmar, Chennai - 600127
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-primary" size={18} />
                                <a
                                    href="mailto:iccet2026@gmail.com"
                                    className="hover:text-white transition-colors"
                                >
                                    iccet2026@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-primary" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map/Extra */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Venue Location</h3>
                        <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden relative group">
                            {/* Placeholder for map image or interactive map */}
                            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                                Map Preview
                            </div>
                            <a
                                href="https://maps.google.com" // Replace with actual link
                                target="_blank"
                                rel="noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © 2026 ICCET. All rights reserved. Designed for PSVPEC.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-xs text-gray-600">Privacy Policy</span>
                        <span className="text-xs text-gray-600">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
