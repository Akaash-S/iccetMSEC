import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">
                            ICTAGI 2026
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            International Conference on Transformative AI for Global Impact. Organized by Meenakshi Sundararajan Engineering College.
                        </p>
                        <div className="flex gap-2">
                            <span className="text-sm text-gray-400">
                                Approved by AICTE | Accredited by NBA, NAAC "A" Grade
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About MSEC
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
                                    Registration Fees
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
                                    Meenakshi Sundararajan Engineering College,<br />
                                    Chennai, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-primary" size={18} />
                                <a
                                    href="mailto:ictagi@msec.edu.in"
                                    className="hover:text-white transition-colors"
                                >
                                    ictagi@msec.edu.in
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-primary" size={18} />
                                <span>+91 7358058584</span>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Collaboration</h3>
                        <p className="text-xs text-gray-400 mb-2">Technical Partners:</p>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                            <span>Springer</span> •
                            <span>ISRO</span> •
                            <span>NIELIT</span> •
                            <span>CDAC</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © 2026 MSEC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
